import { MyCarousel } from '@/components';
import { ProjectGrid } from '@/entities';
import { useComponentInView } from '@/hooks/useComponentInView';
import { useFetchData } from '@/hooks/useLocalData';
import { IProjectData } from '@/types';

export const MyPath = () => {
    const isInView = useComponentInView('myPath');
    const { data: myPathProjects } = useFetchData<IProjectData>('/api/localDataPath');

    const transitionClasses = isInView
        ? 'translate-x-0 opacity-100'
        : '-translate-x-[100%] opacity-0';

    return (
        <div
            id="myPath"
            className="min-h-screen overflow-y-hidden"
        >
            <div
                className={`grid w-[100vw]  transition-all  duration-[1500ms] ${transitionClasses} `}
            >
                <ProjectGrid projects={myPathProjects} />
            </div>
            <MyCarousel projects={myPathProjects} />
        </div>
    );
};
