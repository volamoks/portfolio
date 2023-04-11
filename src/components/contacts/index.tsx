import React, { useContext } from 'react';
import { DarkContainer, LightContainer } from '../containers';
import { IconCard } from '../stack';

import { SiTwitter, SiGithub, SiTelegram, SiWhatsapp } from 'react-icons/si';

interface IIcons {
    id: number;
    name: string;
    component: JSX.Element;
}
const icons = [
    {
        id: 1,
        name: 'Github',
        component: <SiGithub size={30} />,
    },
    { id: 2, name: 'Twitter', component: <SiTwitter size={30} /> },
    { id: 3, name: 'Telegram', component: <SiTelegram size={30} /> },
    { id: 4, name: 'Whatsapp', component: <SiWhatsapp size={30} /> },
];

export const Contacts = () => {
    const card = (arr: IIcons[]) => {
        return arr.map(icon => {
            return (
                <IconCard
                    key={icon.id}
                    name={icon.name}
                    component={icon.component}
                />
            );
        });
    };

    return <div className="flex h-96 items-center">{card(icons)}</div>;
};
