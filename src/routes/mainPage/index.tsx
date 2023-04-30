import { Contacts } from '../../components/contacts';
import { FirstBanner } from '../../containers/firstBanner';
import { Greetings } from '../../containers/greetings';
import { Layout } from '../../components/layout';
import { ProjectTable } from '../../containers/projectsTable';

import { MyPath } from '../../containers/myPath';

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
