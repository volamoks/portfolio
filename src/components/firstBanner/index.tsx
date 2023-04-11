import { LightContainer } from '@/components/containers';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';

import React from 'react';
import { Glitch } from '../glitch';

interface IFirstBanner {
    isScroll: boolean;
    myRef: React.RefObject<HTMLDivElement>;
}

export const FirstBanner = ({ isScroll, myRef }: IFirstBanner) => {
    const handleClick = () => {
        myRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const helloElement = () => (
        <div className="relative flex flex-col h-64 w-96 m-0 p-0  ">
            <h1
                className={`  top-0 h-12  text-clip overflow-hidden transition-all ${
                    isScroll ? 'translate-x-[1000px]' : ' translate-x-0'
                } duration-1000`}
            >
                <span className="absolute  font-bold text-8xl">Hello</span>
            </h1>
            <div
                className={`  bottom-0 h-12  overflow-hidden transition-all ${
                    isScroll ? '-translate-x-[1000px]' : 'translate-x-0'
                }  duration-1000 `}
            >
                <span className="absolute bottom-0 font-bold text-8xl">Hello.</span>
            </div>
        </div>
    );

    return (
        <div
            ref={myRef}
            className={` flex-col relative flex h-screen justify-center  items-center z-20 group overscroll-y-none  transition-all duration-1000 `}
        >
            <div className="absolute">{helloElement()}</div>
            {!isScroll && <Glitch />}
            <button
                className="absolute bottom-24"
                onClick={handleClick}
            >
                <MdOutlineKeyboardDoubleArrowDown size={30} />
            </button>
        </div>
    );
};
