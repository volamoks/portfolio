import React, { useRef, useState } from 'react';
import { Contacts } from '../contacts';
import { FirstBanner } from '../firstBanner';
import { Greetings } from '../greetings';
import { Layout } from '../layout';
import { ProjectTable } from '../projects';
import { Stack } from '../stack';
import { MyPath } from '../myPath';
import { IDarkModeProps, IRef, IRefsInContext } from '../../types';
import { DarkContainer, LightContainer } from '../containers';

interface ICreateContext {
    ref: IRefsInContext;
    dark: IDarkModeProps;
}

export const MyContext = React.createContext<ICreateContext | null>(null);

export const MainPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const bannerRef = useRef<HTMLDivElement>(null);
    const greetingRef = useRef<HTMLDivElement>(null);
    const stackRef = useRef<HTMLDivElement>(null);
    const myProjectsRef = useRef<HTMLDivElement>(null);
    const contactsRef = useRef<HTMLDivElement>(null);

    const mainPageOrder = [
        { id: 1, name: 'banner', component: <FirstBanner myRef={bannerRef} /> },
        { id: 2, name: 'greeting', component: <Greetings myRef={greetingRef} /> },
        { id: 3, name: 'myPath', component: <MyPath /> },
        { id: 5, name: 'projects', component: <ProjectTable myRef={myProjectsRef} /> },
        // { id: 4, name: 'stack', component: <Stack myRef={stackRef} /> },
        { id: 6, name: 'contacts', component: <Contacts myRef={contactsRef} /> },
    ];

    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const myRef: IRefsInContext = {
        greetingRef,
        stackRef,
        myProjectsRef,
        contactsRef,
        bannerRef,
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
