import { useEffect, useState } from 'react';
import Image from 'next/image';

import { IProjectData } from '@/types';

import { useGoToPage } from '@/hooks/useGoToPage';
import { FrameworksIcons } from '@/components/UI';

export const ProjectGrid = ({ projects }: { projects: IProjectData[] }) => {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        setShouldRender(true);
    }, []);

    const { handleGoToPage } = useGoToPage();
    const gridView = (
        <>
            <h1 className="uppercase text-5xl text-center font-bold py-12">
                My Path milestones<span className="text-red-500 ">_</span>
            </h1>

            {shouldRender &&
                projects.map((item, i) => (
                    <div
                        key={item.id}
                        className=" grid grid-cols-2 relative h-1/2 items-start "
                    >
                        <div className={` pl-12 grid gap-4 ${i % 2 === 0 ? 'hidden' : ''}`}>
                            <h1
                                dangerouslySetInnerHTML={{ __html: item.name }}
                                className="text-3xl uppercase font-bold py-12 "
                            >
                                {/* {i + 1}.{item.name} */}
                            </h1>
                            <div className="flex gap-2">
                                <FrameworksIcons project={item} />
                            </div>
                            {/* <div className="text-xl w-3/4">{item.about}</div> */}
                            <div
                                dangerouslySetInnerHTML={{ __html: item.description }}
                                className="text-xl w-3/4"
                            >
                                {/* {item.description} */}
                            </div>
                        </div>
                        <div
                            onClick={() => handleGoToPage('/' + item.title)}
                            className={` cursor-pointer xL:hover:scale-110  ${
                                i % 2 === 0 ? 'left-0' : 'right-0'
                            }`}
                        >
                            <Image
                                alt={item.name}
                                src={'/' + item.images[0]}
                                width={800}
                                height={680}
                            ></Image>
                        </div>
                        <div
                            className={` w-[80%] pl-12 grid gap-4  ${i % 2 === 0 ? '' : 'hidden'}`}
                        >
                            <h1
                                dangerouslySetInnerHTML={{ __html: item.name }}
                                className="text-3xl uppercase font-bold py-12 "
                            ></h1>
                            <div className="flex gap-2">
                                <FrameworksIcons project={item} />
                            </div>
                            {/* <div className="text-xl w-3/4"> {item.about}</div> */}
                            <div
                                dangerouslySetInnerHTML={{ __html: item.description }}
                                className="text-xl w-full"
                            ></div>
                        </div>
                    </div>
                ))}
        </>
    );
    return (
        <div
            className={` hidden w-full lg:grid relative py-8 transition-all xl:overflow-x-hidden `}
        >
            {gridView}
        </div>
    );
};
