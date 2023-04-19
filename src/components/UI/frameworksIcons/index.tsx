import { icons1 } from '@/constants';

import { IProjectData } from '@/types';

interface IFrameworkIconsProps {
    project: IProjectData;
    iconsSize?: number;
}

export const FrameworksIcons = ({ project, iconsSize = 30 }: IFrameworkIconsProps) => {
    const iconsPics = icons1(iconsSize);

    const pics = iconsPics
        .filter(icon => project?.frameworks.includes(icon.name))
        .map((icon, i) => <div key={icon.id}>{icon.component}</div>);

    return <>{pics}</>;
};
