import React from 'react';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import { IProjectData } from '@/types';
import { FrameworksIcons } from '@/components/UI/frameworksIcons';
import { useGoToPage } from '@/hooks/useGoToPage';

export const MyCarousel = ({ projects }: { projects: IProjectData[] }) => {
    const { handleGoToPage } = useGoToPage();
    const carousel = (
        <div className="h-full w-screen relative overflow-y-hidden">
            <h1 className="uppercase text-4xl text-center font-bold pt-4">
                My Path to WebDev<span className="text-red-500 ">_</span>
            </h1>
            <Carousel slideInterval={5000}>
                {projects.map((item, i) => (
                    <div
                        key={item.id}
                        onClick={() => handleGoToPage('/' + item.name)}
                        className="w-screen relative flex flex-col justify-start "
                    >
                        <Image
                            alt={item.name}
                            src={'/' + item.images[0]}
                            width={820}
                            height={700}
                        ></Image>
                        <div className="px-4 py-12 grid gap-8">
                            <h1 className="uppercase text-3xl text-start font-bold ">
                                {i + 1}.{item.name}
                            </h1>
                            <div className="flex gap-4">
                                <FrameworksIcons
                                    project={item}
                                    iconsSize={40}
                                />
                            </div>
                            <div className="text-xl text-start  ">{item.about}</div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );

    return (
        <div className="xl:hidden  min-h-screen w-screen relative overflow-y-hidden py-2">
            {carousel}
        </div>
    );
};
