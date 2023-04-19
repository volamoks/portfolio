import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import { useGoToPage } from '@/hooks/useGoToPage';
import { FrameworksIcons } from '@/components/UI/frameworksIcons';

import { IProjectData } from '../../types';

export const ProjectCard = ({ project }: { project: IProjectData }) => {
    const { handleGoToPage } = useGoToPage();

    return (
        <AnimatePresence key={project.id}>
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
                    <span>{project.name}</span>
                    <span className="text-red-500">_</span>
                    <div className="flex m-2 gap-2 ">
                        <FrameworksIcons project={project} />
                    </div>
                </div>
                <div className="relative object-cover w-full h-[calc(75vw)] xl:h-full">
                    <img
                        onClick={() => handleGoToPage(project.name + '')}
                        className="xl:opacity-0 group-hover:xl:opacity-100  w-full h-full object-cover transition-all duration-500 cursor-pointer z-0 "
                        src={`/${project.images?.at(0)}  `}
                        alt={project.name}
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
