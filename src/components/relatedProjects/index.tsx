import { useFetchData } from '@/hooks/useLocalData';
import { IProjectData } from '@/types';
import React from 'react';
import Image from 'next/image';
import { useGoToPage } from '@/hooks/useGoToPage';
import { useNavigateById } from '@/hooks/useNavigateById';
import { useGoToPageByRef } from '@/hooks/useGoToPageByRef';
import { Spinner } from 'flowbite-react';

interface IRelatedProjects {
    id: number;
    handleGoToById: (id: string) => void;
}

export const RelatedProjects = ({ id, handleGoToById }: IRelatedProjects) => {
    const { data, isLoading, error } = useFetchData<IProjectData>('/api/localDataProjects');

    const { handleGoToPage } = useGoToPage();

    const goto = (id: number) => {
        handleGoToPage('/' + id);
        handleGoToById('myProject');
    };

    if (isLoading) return <Spinner />;

    const related = data
        .filter(item => data[id]?.relatedProjects.includes(item.id))
        .map((item, i) => (
            <div
                key={item.id + 'related'}
                onClick={() => handleGoToPage(item.id + '')}
                className=" relative xl:h-2/3 h-full w-[92%] hover:scale-110 transition-all duration-500 ease-in-out mx-auto"
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
                {related}
            </div>
        </div>
    );
};
