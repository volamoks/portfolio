import { useComponentInView } from '@/hooks/useComponentInView';
import { useFetchData } from '@/hooks/useLocalData';
import { MyCarousel } from './Carousel';
import { Grid } from './Grid';
import { MySpinner } from '../UI/Spinner';

import { IProjectData } from '@/types';

export const MyPath = () => {
    const isInView = useComponentInView('myPath');
    const { data: myPathProjects, isLoading } = useFetchData<IProjectData>('/api/localDataPath');

    const transitionClasses = isInView
        ? 'translate-x-0 opacity-100'
        : '-translate-x-[100%] opacity-0';

    // if (isLoading) return <MySpinner />;

    return (
        <div id="myPath">
            <div
                className={`grid w-[100vw] min-h-screen transition-all overflow-y-hidden duration-[1500ms] ${transitionClasses} `}
            >
                <Grid projects={myPathProjects} />
            </div>
            <MyCarousel projects={myPathProjects} />
        </div>
    );
};
