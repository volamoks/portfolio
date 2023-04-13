import { useEffect, useState } from 'react';

import { Underscore } from '../underscore';

import { motion, AnimatePresence } from 'framer-motion';
import { icons1 } from '../../constants';
import { projectsData } from '../../constants';
import { FilterButtons } from '../filterButtons';
import { IRefProps } from '../../types';
import { useComponentInView } from '@/hooks/useComponentInView';
import { useRouter } from 'next/router';

export const ProjectTable = ({ myRef }: IRefProps) => {
    const [array, setArray] = useState(projectsData);
    const [selectedFilter, setSelectedFilter] = useState('all');
    const router = useRouter();

    const filtersInView = useComponentInView('filters');
    const projectsInView = useComponentInView('projects');

    useEffect(() => {
        selectedFilter === 'all'
            ? setArray(projectsData)
            : setArray(
                  projectsData.filter(item =>
                      item.frameworks.map(elem => elem.toLowerCase()).includes(selectedFilter),
                  ),
              );
    }, [selectedFilter]);

    const handleClick = (name: string) => {
        setSelectedFilter(name.toLowerCase());
    };

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFilter(e.target.value.toLowerCase());
    };

    const handleGoToPage = (id: string) => {
        router.push(`/projects/${id}`);
    };

    const project = array.map((item, i) => (
        <AnimatePresence key={item.id}>
            <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                className=" relative bg-gray-500 dark:bg-gray-700 group shadow-2xl h-full w-full hover:shadow-gray-500 hover:shadow-2xl dark:shadow-gray-800 flex items-center"
            >
                <div
                    className=" absolute translate-y-0 group-hover:-translate-y-64 group-hover:md:-translate-y-[350px] group-hover:lg:-translate-y-[230px] group-hover:bg-red-500 group-hover:text-white  
                    transition-all duration-500 font-bold uppercase xl:text-4xl group-hover:text-2xl  pl-2 cursor-pointer"
                >
                    <span>{item.name}</span>
                    <span className="text-red-500">_</span>
                    <div className="flex m-2 gap-2 ">
                        {icons1(30)
                            .filter(icon => item.frameworks.includes(icon.name))
                            .map((icon, i) => (
                                <div key={icon.id}>{icon.component}</div>
                            ))}
                    </div>
                </div>
                <img
                    onClick={() => handleGoToPage('1')}
                    className="opacity-0 group-hover:opacity-100 object-cover transition-all duration-500 cursor-pointer z-0 "
                    src="/asos.png"
                    alt="asos"
                />
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
                className={`grid  md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-12 px-6 transition-all duration-700 ${transitionClasses(
                    projectsInView,
                )}`}
            >
                {project}
            </motion.div>
        </div>
    );
};
