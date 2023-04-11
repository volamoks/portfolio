import { IRef, ISideBar } from '@/types';

export const navList = (ref: IRef) => [
    { id: 1, name: 'about', ref: ref.aboutRef },
    { id: 2, name: 'skills', ref: ref.skillsRef },
    { id: 3, name: 'projects', ref: ref.projectsRef },
    { id: 4, name: 'contact', ref: ref.contactRef },
];

export const projectsData = [
    { id: 4, name: 'Lee', type: 3, size: 2, frameworks: ['JavaScript', 'HTML', 'Tailwind CSS'] },
    { id: 1, name: 'Smith', type: 1, size: 1, frameworks: ['JavaScript', 'HTML', 'Tailwind CSS'] },
    {
        id: 2,
        name: 'Johnson',
        type: 2,
        size: 1,
        frameworks: ['TypeScript', 'HTML', 'Tailwind CSS'],
    },
    {
        id: 3,
        name: 'Brown',
        type: 1,
        size: 1,
        frameworks: ['React', 'Redux', 'MongoDB', 'JavaScript', 'Tailwind CSS'],
    },
    { id: 5, name: 'Garcia', type: 2, size: 1, frameworks: ['TypeScript', 'HTML', 'Tailwind CSS'] },
    { id: 6, name: 'Miller', type: 1, size: 1, frameworks: ['Next.js', 'HTML', 'Tailwind CSS'] },
    {
        id: 7,
        name: 'Davis',
        type: 2,
        size: 2,
        frameworks: ['React Router', 'GraphQL', 'Tailwind CSS'],
    },
    {
        id: 8,
        name: 'Gonzalez',
        type: 3,
        size: 1,
        frameworks: ['TypeScript', 'SASS', 'Tailwind CSS'],
    },
    { id: 9, name: 'Taylor', type: 1, size: 1, frameworks: ['JavaScript', 'HTML', 'Tailwind CSS'] },
];
