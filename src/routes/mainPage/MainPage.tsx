import { nanoid } from '@reduxjs/toolkit';
import { Contacts } from '@/components/Contacts/Contacts';
import { MainPageLayout } from '@/providers/layout/MainPageLayout';

import {
    FirstBanner,
    Greetings,
    ProjectsTable,
    MyPath
} from '@/containers/Index';

export const MainPage = () => {
    const mainPageOrder = [
        { id: 1, name: 'banner', component: <FirstBanner /> },
        { id: 2, name: 'greeting', component: <Greetings /> },
        { id: 3, name: 'myPath', component: <MyPath /> },
        { id: 5, name: 'projects', component: <ProjectsTable /> },
        { id: 6, name: 'contacts', component: <Contacts /> }
    ];

    return (
        <>
            {mainPageOrder.map((item, i) => (
                <MainPageLayout key={nanoid()} nth={i}>
                    <div className="overflow-x-hidden">{item.component}</div>
                </MainPageLayout>
            ))}
        </>
    );
};
