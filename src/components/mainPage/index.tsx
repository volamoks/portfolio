import { Contacts } from '../contacts';
import { FirstBanner } from '../firstBanner';
import { Greetings } from '../greetings';
import { Layout } from '../layout';
import { ProjectTable } from '../projectsTable';

import { MyPath } from '../myPath';

import { nanoid } from '@reduxjs/toolkit';

export const MainPage = () => {
    const mainPageOrder = [
        { id: 1, name: 'banner', component: <FirstBanner /> },
        { id: 2, name: 'greeting', component: <Greetings /> },
        { id: 3, name: 'myPath', component: <MyPath /> },
        { id: 5, name: 'projects', component: <ProjectTable /> },
        { id: 6, name: 'contacts', component: <Contacts /> },
    ];

    return (
        <>
            {mainPageOrder.map((item, i) => (
                <Layout
                    key={nanoid()}
                    nth={i}
                >
                    <div className="overflow-x-hidden">{item.component}</div>
                </Layout>
            ))}
        </>
    );
};
