import { LightContainer } from '@/components/containers';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Underscore } from '../underscore';

import { motion, AnimatePresence } from 'framer-motion';
import { icons1 } from '../constatnts';
import { projectsData } from '@/constants/constatnts';
import { FilterButtons } from '../filterButtons';
import { IRefProps } from '../../types';

export const ProjectTable = ({ myRef }: IRefProps) => {
    const [array, setArray] = useState(projectsData);
    const [selectedFilter, setSelectedFilter] = useState('all');

    // console.log(selectedFilter);

    useEffect(() => {
        selectedFilter === 'all'
            ? setArray(projectsData)
            : setArray(
                  projectsData.filter(item =>
                      item.frameworks.map(elem => elem.toLowerCase()).includes(selectedFilter),
                  ),
              );
    }, [selectedFilter]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSelectedFilter(e.currentTarget.innerText.toLowerCase());
    };

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFilter(e.target.value.toLowerCase());
    };

    const project = array.map((item, i) => (
        <AnimatePresence key={item.id}>
            <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                className="bg-gray-300 dark:bg-gray-700 group shadow-lg h-full w-full hover:shadow-gray-500 hover:shadow-2xl dark:shadow-gray-800 flex items-center"
            >
                <div className="absolute translate-y-0 bg-gray-300 dark:bg-gray-700 group-hover:-translate-y-64 group-hover:bg-red-500 group-hover:text-white  transition-all duration-500 font-bold uppercase xl:text-4xl group-hover:text-2xl text-gray-600 dark:text-gray-100 pl-2">
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
                <Image
                    className="opacity-0 group-hover:opacity-100 object-cover transition-all duration-500 cursor-pointer z-10 "
                    src="/asos.png"
                    alt="asos"
                    width={500}
                    height={400}
                />
            </motion.div>
        </AnimatePresence>
    ));

    return (
        <div
            ref={myRef}
            className="min-h-screen py-12"
        >
            <h1 className=" text-slate-500 dark:text-slate-200 py-12 text-5xl font-bold text-center uppercase">
                My work. To show what i can do
                <Underscore />
            </h1>

            <h2 className="text-center text-slate-500 dark:text-slate-200  italic text-xl w-full xl:w-1/3 mx-auto ">
                Ignite the world with your strikingly showcased art using Haar’s beautifully
                crafted, easily customizable homepages.
            </h2>
            <FilterButtons
                handleClick={handleClick}
                selectedFilter={selectedFilter}
                handleSelect={handleSelect}
            />
            <motion.div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-12 px-6">
                {project}
            </motion.div>
        </div>
    );
};
