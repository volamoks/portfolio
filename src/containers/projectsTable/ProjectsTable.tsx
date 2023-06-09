import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { Underscore } from '@/components';
import { ProjectCard, Filters } from '@/entities';
import { useComponentInView } from '@/hooks/useComponentInView';
import { useFetchData } from '@/hooks/useLocalData';
import { useSetFilter } from '@/hooks/useSetFilter';
import { IProjectData } from '@/types';

export const ProjectsTable = () => {
    const { data, isLoading, error } = useFetchData<IProjectData>('/api/localDataProjects');

    const [projectsArr, setProjectsArr] = useState<IProjectData[]>(data);
    const { filter, handleSetFilter } = useSetFilter('all');

    const filtersInView = useComponentInView('filters');
    const projectsInView = useComponentInView('projects');

    useEffect(() => {
        filter === 'all'
            ? setProjectsArr(data)
            : setProjectsArr(
                  data.filter(({ frameworks }) =>
                      frameworks.map(elem => elem.toLowerCase()).includes(filter),
                  ),
              );
    }, [filter, data]);

    const project = (arr: IProjectData[]) =>
        arr.map((project, i) => (
            <ProjectCard
                key={project.id}
                project={project}
            />
        ));

    const transitionClasses = (componentInView: boolean) =>
        componentInView ? 'translate-y-0 opacity-1' : 'translate-y-[30vh] opacity-0';

    return (
        <div
            id="projects"
            className="min-h-screen py-12"
        >
            <div
                id="filters"
                className={` transition-all duration-700 ${transitionClasses(
                    filtersInView || projectsInView,
                )}`}
            >
                <h1 className=" py-12 xl:text-5xl  text-4xl font-bold text-center uppercase">
                    My works. To show what i can do
                    <Underscore />
                </h1>

                <h2 className="text-center italic text-xl w-full xl:w-1/3 mx-auto ">
                    You can filter projects by frameworks and technologies used in them.
                </h2>

                <Filters
                    handleSetFilter={handleSetFilter}
                    filter={filter}
                />
            </div>

            <motion.div
                className={`grid min-h-screen xl:min-h-screen md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-12 px-6 transition-all duration-700 ${transitionClasses(
                    projectsInView,
                )}`}
            >
                {project(projectsArr)}
            </motion.div>
        </div>
    );
};
