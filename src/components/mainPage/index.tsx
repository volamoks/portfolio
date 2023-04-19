import React, { useRef, useState } from 'react';
import { Contacts } from '../contacts';
import { FirstBanner } from '../firstBanner';
import { Greetings } from '../greetings';
import { Layout } from '../layout';
import { ProjectTable } from '../projectsTable';

import { MyPath } from '../myPath';
import { IRefsInContext } from '../../types';
import { nanoid } from '@reduxjs/toolkit';

interface ICreateContext {
    ref: IRefsInContext;
}

export const MyContext = React.createContext<ICreateContext | null>(null);

export const MainPage = () => {
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
        { id: 6, name: 'contacts', component: <Contacts myRef={contactsRef} /> },
    ];

    const myRef: IRefsInContext = {
        greetingRef,
        stackRef,
        myProjectsRef,
        contactsRef,
        bannerRef,
    };

    const contextValue = {
        ref: myRef,
    };

    return (
        <>
            <MyContext.Provider value={contextValue}>
                {mainPageOrder.map((item, i) => (
                    <Layout
                        key={nanoid()}
                        nth={i}
                    >
                        <div className="overflow-x-hidden">{item.component}</div>
                    </Layout>
                ))}
            </MyContext.Provider>
        </>
    );
};
