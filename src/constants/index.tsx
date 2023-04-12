import { IRef, IRefProps, IRefsInContext, ISideBar } from '@/types';
import {
    SiNextdotjs,
    SiCss3,
    SiSass,
    SiReactrouter,
    SiTailwindcss,
    SiReact,
    SiMongodb,
    SiGraphql,
    SiBootstrap,
    SiRedux,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiGithub,
    SiTelegram,
    SiTwitter,
    SiWhatsapp,
} from 'react-icons/si';
import { IData, IIcon } from '../types';

export const navList = (ref: IRefsInContext) => [
    { id: 1, name: 'about', ref: ref.bannerRef },
    { id: 2, name: 'skills', ref: ref.stackRef },
    { id: 3, name: 'projects', ref: ref.myProjectsRef },
    { id: 4, name: 'contact', ref: ref.contactsRef },
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

export const icons1 = (size = 30) => [
    { id: 1, name: 'HTML5', component: <SiHtml5 size={size} /> },
    { id: 2, name: 'CSS3', component: <SiCss3 size={size} /> },
    { id: 3, name: 'SASS', component: <SiSass size={size} /> },
    { id: 4, name: 'Bootstrap', component: <SiBootstrap size={size} /> },
    { id: 5, name: 'Tailwind CSS', component: <SiTailwindcss size={size} /> },
    { id: 6, name: 'JavaScript', component: <SiJavascript size={size} /> },
    { id: 7, name: 'TypeScript', component: <SiTypescript size={size} /> },
    { id: 8, name: 'React', component: <SiReact size={size} /> },
    { id: 9, name: 'Redux', component: <SiRedux size={size} /> },
    { id: 10, name: 'Next.js', component: <SiNextdotjs size={size} /> },
    { id: 11, name: 'React Router', component: <SiReactrouter size={size} /> },
    { id: 12, name: 'MongoDB', component: <SiMongodb size={size} /> },
    { id: 13, name: 'GraphQL', component: <SiGraphql size={size} /> },
];

export const icons2 = (size = 30) => [
    { id: 1, name: 'Tailwind CSS', component: <SiTailwindcss size={size} /> },
    { id: 2, name: 'TypeScript', component: <SiTypescript size={size} /> },
    { id: 3, name: 'React', component: <SiReact size={size} /> },
    { id: 4, name: 'Redux', component: <SiRedux size={size} /> },
    { id: 5, name: 'Next.js', component: <SiNextdotjs size={size} /> },
];

export const icons3 = (size = 30) => [
    { id: 1, name: 'MongoDB', component: <SiMongodb size={size} /> },
    { id: 2, name: 'GraphQL', component: <SiGraphql size={size} /> },
];

export const data: IData[] = [
    {
        id: 1,
        name: 'Project1',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi modi tempore cum et labore reiciendis.',
        img: '/asos.png',
    },
    {
        id: 2,
        name: 'Project2',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi modi tempore cum et labore reiciendis.',
        img: '/asos.png',
    },
    {
        id: 3,
        name: 'Project3',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi modi tempore cum et labore reiciendis.',
        img: '/asos.png',
    },
    {
        id: 4,
        name: 'Project4',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi modi tempore cum et labore reiciendis.',
        img: '/asos.png',
    },
];

export const contactsIcons = [
    {
        id: 1,
        name: 'Github',
        component: <SiGithub size={30} />,
    },
    { id: 2, name: 'Twitter', component: <SiTwitter size={30} /> },
    { id: 3, name: 'Telegram', component: <SiTelegram size={30} /> },
    { id: 4, name: 'Whatsapp', component: <SiWhatsapp size={30} /> },
];
