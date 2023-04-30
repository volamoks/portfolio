import { RelatedProjects } from '../containers/relatedProjects/index';
import React from 'react';
import { SideBar } from '../components/sidebar/index';

export interface IIcon {
    id: number;
    name: string;
    component: JSX.Element;
    size?: number;
    link: string;
}

export interface IFilterGroup {
    id: number;
    name: string;
    arr: iFilterArray[];
}

export interface iFilterArray {
    id: number;
    name: string;
    component: JSX.Element;
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
    children?: React.ReactNode;
}

export interface IData {
    id: number;
    name: string;
    description: string;
    img: string;
}

export interface IRefsInContext {
    greetingRef: React.RefObject<HTMLElement>;
    stackRef: React.RefObject<HTMLElement>;
    myProjectsRef: React.RefObject<HTMLElement>;
    contactsRef: React.RefObject<HTMLElement>;
    bannerRef: React.RefObject<HTMLElement>;
}

export interface IProjectData {
    id: number;
    name: string;
    title: string;
    github: string;
    web_link: string;
    isResponsive: false;
    frameworks: string[];
    description: string;
    images: string[];
    about: string;
    relatedProjects: number[];
}
