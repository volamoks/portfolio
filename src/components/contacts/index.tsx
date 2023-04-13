import React, { useContext } from 'react';
import { useGoToPageByRef } from '@/hooks/useGoToPageByRef';
import { IconCard } from '../stack';
import { IIcon, IRefProps } from '@/types';
import { contactsIcons } from '@/constants';

import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

export const Contacts = ({ myRef }: IRefProps) => {
    const { ref, handleClick } = useGoToPageByRef();

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

    return (
        <>
            <div
                ref={myRef}
                className="flex flex-col h-64 items-center w-full justify-between p-6"
            >
                <button onClick={() => handleClick(ref?.bannerRef)}>
                    <MdKeyboardDoubleArrowUp size={30} />
                </button>
                <div className="flex gap-6">{card(contactsIcons)}</div>
            </div>
        </>
    );
};
