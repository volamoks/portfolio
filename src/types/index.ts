import React from 'react';
import { SideBar } from '../components/sidebar/index';

export interface IIcon {
    id: number;
    name: string;
    component: JSX.Element;
    size: number;
}

export interface IRefProps {
    myRef: React.RefObject<HTMLDivElement>;
}

export interface IRef {
    aboutRef: React.RefObject<HTMLElement>;
    skillsRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
}
export interface ISideBar {
    id: number;
    name: string;
    ref?: IRef;
}

export interface IDarkModeProps {
    isDarkMode: boolean;
    handleDarkMode: () => void;
    children?: React.ReactNode;
}

export interface IData {
    id: number;
    name: string;
    description: string;
    img: string;
}
