import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Contacts } from '../contacts';
import { FirstBanner } from '../firstBanner';
import { Greetings } from '../greetings';
import { Layout } from '../layout';
import { ProjectTable } from '../projects';
import { Stack } from '../stack';
import { useScroll } from 'framer-motion';
import { useScrollDirection } from '@/hooks/UseScroll';
import { MyPath } from '../myPath';
import { IDarkModeProps, IRef } from '../../types';
import { DarkContainer, LightContainer } from '../containers';

interface ICreateContext {
    ref: IRef;
    dark: IDarkModeProps;
}
interface IMainPageOrder {
    id: number;
    name: string;
    component: React.RefObject<HTMLElement>;
}

export const MyContext = React.createContext<ICreateContext | null>(null);

export const MainPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const bannerRef = useRef<HTMLDivElement>(null);
    const greetingRef = useRef<HTMLDivElement>(null);
    const stackRef = useRef<HTMLDivElement>(null);
    const myProjectsRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const scrollDirection = useScrollDirection();

    const mainPageOrder = [
        {
            id: 1,
            name: 'banner',
            component: (
                <FirstBanner
                    myRef={greetingRef}
                    isScroll={isScroll}
                />
            ),
        },
        { id: 2, name: 'greeting', component: <Greetings myRef={greetingRef} /> },
        { id: 3, name: 'myPath', component: <MyPath /> },
        { id: 5, name: 'projects', component: <ProjectTable myRef={myProjectsRef} /> },
        { id: 4, name: 'stack', component: <Stack myRef={stackRef} /> },
        { id: 6, name: 'contacts', component: <Contacts /> },
    ];

    const setScroll = useCallback(() => {
        if (scrollDirection === 'down') {
            setIsScroll(true);
            bannerRef.current?.scrollIntoView({ behavior: 'smooth' });
        }

        if (scrollDirection === 'up') {
            setIsScroll(false);
        }
    }, [scrollDirection]);

    useEffect(() => {
        window.addEventListener('scroll', setScroll);
        return () => {
            window.removeEventListener('scroll', setScroll);
        };
    }, [setScroll]);

    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const myRef = {
        aboutRef: greetingRef,
        skillsRef: stackRef,
        projectsRef: myProjectsRef,
        contactRef: bannerRef,
    };

    const darkModeProps = {
        isDarkMode,
        handleDarkMode,
    };

    const contextValue = {
        ref: myRef,
        dark: darkModeProps,
    };

    return (
        <>
            <MyContext.Provider value={contextValue}>
                <Layout
                    isDarkMode={isDarkMode}
                    handleDarkMode={handleDarkMode}
                >
                    {' '}
                    {mainPageOrder.map((item, i) =>
                        i % 2 !== 0 ? (
                            <DarkContainer>{item.component}</DarkContainer>
                        ) : (
                            <LightContainer>{item.component}</LightContainer>
                        ),
                    )}
                </Layout>
            </MyContext.Provider>
        </>
    );
};
