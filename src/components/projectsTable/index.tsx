import { useEffect, useState } from 'react';

import { Underscore } from '../underscore';

import { motion, AnimatePresence } from 'framer-motion';
import { icons1 } from '../../constants';

import { FilterButtons } from '../filterButtons';
import { IProjectData, IRefProps } from '../../types';
import { useComponentInView } from '@/hooks/useComponentInView';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { useFetchData } from '@/hooks/useLocalData';

export const ProjectTable = ({ myRef }: IRefProps) => {
    const { data, isLoading, error } = useFetchData<IProjectData>('/api/localDataProjects');
    const [array, setArray] = useState(data);
    const [selectedFilter, setSelectedFilter] = useState('all');
    const router = useRouter();

    const filtersInView = useComponentInView('filters');
    const projectsInView = useComponentInView('projects');

    const iconsSize = 30;

    useEffect(() => {
        selectedFilter === 'all'
            ? setArray(data)
            : setArray(
                  data.filter(item =>
                      item.frameworks.map(elem => elem.toLowerCase()).includes(selectedFilter),
                  ),
              );
    }, [selectedFilter, data]);

    const handleClick = (name: string) => {
        setSelectedFilter(name.toLowerCase());
    };

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFilter(e.target.value.toLowerCase());
    };

    const handleGoToPage = (id: string) => {
        router.push(`/${id}`);
    };

    const project = (arr: IProjectData[]) =>
        arr.map((item, i) => (
            <AnimatePresence key={item.id}>
                <motion.div
                    layout
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    className=" relative  flex flex-col items-start justify-center group shadow-2xl min-h-[31vw] w-full xl:bg-gray-500 dark:xl:bg-gray-700  hover:shadow-gray-500 hover:shadow-2xl dark:shadow-gray-800 xl:items-start"
                >
                    <div
                        className=" relative xl:absolute  bg-red-500 text-white  xl:bg-transparent xl:translate-y-0  xl:group-hover:-translate-y-[278px]  group-hover:bg-red-500 group-hover:text-white  
                    transition-all duration-500 font-bold uppercase xl:text-4xl xl:group-hover:text-2xl  pl-2 cursor-pointer"
                    >
                        <span>{item.name}</span>
                        <span className="text-red-500">_</span>
                        <div className="flex m-2 gap-2 ">
                            {icons1(iconsSize)
                                .filter(icon => item.frameworks.includes(icon.name))
                                .map((icon, i) => (
                                    <div key={icon.id}>{icon.component}</div>
                                ))}
                        </div>
                    </div>
                    <div className="relative w-full h-[calc(80vw)] xl:h-full">
                        <Image
                            onClick={() => handleGoToPage(item.id + '')}
                            className="xl:opacity-0 group-hover:xl:opacity-100 object-cover transition-all duration-500 cursor-pointer z-0 "
                            src={`/${item.images?.at(0)}  `}
                            alt={item.name}
                            fill
                        />
                    </div>
                </motion.div>
            </AnimatePresence>
        ));

    const transitionClasses = (componentInView: boolean) =>
        componentInView ? 'translate-y-0 opacity-1' : 'translate-y-[30vh] opacity-0';

    return (
        <div
            ref={myRef}
            className="min-h-screen py-12"
        >
            <div
                id={'filters'}
                className={` transition-all duration-700 ${transitionClasses(
                    filtersInView || projectsInView,
                )}`}
            >
                <h1 className=" py-12 text-5xl font-bold text-center uppercase">
                    My works. To show what i can do
                    <Underscore />
                </h1>

                <h2 className="text-center italic text-xl w-full xl:w-1/3 mx-auto ">
                    Ignite the world with your strikingly showcased art using Haar’s beautifully
                    crafted, easily customizable homepages.
                </h2>
                <FilterButtons
                    handleClick={handleClick}
                    selectedFilter={selectedFilter}
                    handleSelect={handleSelect}
                    setSelectedFilter={setSelectedFilter}
                />
            </div>

            <motion.div
                id={'projects'}
                className={`grid min-h-screen md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-12 px-6 transition-all duration-700 ${transitionClasses(
                    projectsInView,
                )}`}
            >
                {project(array)}
            </motion.div>
        </div>
    );
};
