import React, { useContext } from 'react';
import { IconCard } from '../stack';
import { IIcon, IRefProps } from '@/types';
import { contactsIcons } from '@/constants';
import { MyContext } from '../mainPage';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

export const Contacts = ({ myRef }: IRefProps) => {
    const myValue = useContext(MyContext);
    const { ref } = myValue ? myValue : { ref: null };
    if (!ref) return null;

    const handleClick = () => {
        ref.bannerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const card = (arr: IIcon[]) => {
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

    const goUpButton = (
        <button onClick={handleClick}>
            <MdKeyboardDoubleArrowUp size={30} />
        </button>
    );

    return (
        <>
            <div
                ref={myRef}
                className="flex flex-col h-64 items-center w-full justify-between p-6"
            >
                {goUpButton}
                <div className="flex gap-6">{card(contactsIcons)}</div>
            </div>
        </>
    );
};
