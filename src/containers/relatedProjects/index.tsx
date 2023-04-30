import { useFetchData } from '@/hooks/useLocalData';
import { IProjectData } from '@/types';
import React from 'react';
import Image from 'next/image';
import { useGoToPage } from '@/hooks/useGoToPage';
import { Spinner } from 'flowbite-react';
import { useNavigateById } from '@/hooks/useNavigateById';

interface IRelatedProjects {
    id: number;
    handleGoToRelated: (id: string) => void;
}

export const RelatedProjects = ({ id, handleGoToRelated }: IRelatedProjects) => {
    const { data, isLoading, error } = useFetchData<IProjectData>('/api/localDataProjects');

    if (isLoading) return <Spinner />;

    const relatedProjects = data
        .filter(item => data[id]?.relatedProjects.includes(item.id))
        .map((item, i) => (
            <div
                key={item.id + 'related'}
                onClick={() => handleGoToRelated(item.name + '')}
                className=" relative xl:h-2/3 h-full w-[92%] xl:hover:scale-110 transition-all duration-500 ease-in-out mx-auto"
            >
                <h1>{item.name}</h1>
                <div className="w-1/2 xl:h-1/2 h-2/3 hover:translate">
                    <Image
                        src={'/' + item.images[0]}
                        alt={item.name}
                        className="object-cover"
                        fill
                    ></Image>
                </div>
            </div>
        ));

    return (
        <div className=" xl:h-[calc(100vh*0.6)] h-full border-y my-12 py-4 ">
            <h1 className="text-2xl font bold ">Related Projects</h1>
            <div className="grid  xl:grid-cols-4 h-full xl:gap-16 gap-4 items-center pb-4">
                {relatedProjects}
            </div>
        </div>
    );
};
