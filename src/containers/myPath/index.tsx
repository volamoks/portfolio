import { useComponentInView } from '@/hooks/useComponentInView';
import { useFetchData } from '@/hooks/useLocalData';
import { MyCarousel } from '../../components/carousel';

import { IProjectData } from '@/types';
import { Grid } from '@/components/projectsGrid';

export const MyPath = () => {
    const isInView = useComponentInView('myPath');
    const { data: myPathProjects, isLoading } = useFetchData<IProjectData>('/api/localDataPath');

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
                <Grid projects={myPathProjects} />
            </div>
            <MyCarousel projects={myPathProjects} />
        </div>
    );
};
