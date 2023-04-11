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
} from 'react-icons/si';
import { IData, IIcon } from '../types';

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

export const icons2 = [
    { id: 1, name: 'Tailwind CSS', component: <SiTailwindcss size={80} /> },
    { id: 2, name: 'TypeScript', component: <SiTypescript size={80} /> },
    { id: 3, name: 'React', component: <SiReact size={80} /> },
    { id: 4, name: 'Redux', component: <SiRedux size={80} /> },
    { id: 5, name: 'Next.js', component: <SiNextdotjs size={80} /> },
];
export const icons3 = [
    { id: 1, name: 'MongoDB', component: <SiMongodb size={80} /> },
    { id: 2, name: 'GraphQL', component: <SiGraphql size={80} /> },
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
