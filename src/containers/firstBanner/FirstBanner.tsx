import React, { useEffect, useState } from 'react';
import { Glitch } from '../../components/GlitchEffect/Glitch';

import { UseScrollDirections } from '@/hooks/useScrollDirection';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import { Header } from '@/entities';
import { Underscore } from '@/components';
import { useNavigateById } from '@/hooks/useNavigateById';

export const FirstBanner = () => {
    const [isFirstRender, setIsFirstRender] = useState(true);
    const { isScroll } = UseScrollDirections();

    const { handleGoToById } = useNavigateById();

    useEffect(() => {
        setIsFirstRender(false);
        // document.getElementById('first')?.scrollIntoView({ behavior: 'auto' });
    }, [isFirstRender]);

    const helloElement = () => (
        <div className="relative flex flex-col h-64 w-96 m-0 p-0  ">
            <h1
                className={`  top-0 h-12  text-clip overflow-hidden transition-all ${
                    isFirstRender || isScroll ? 'translate-x-[1000px]' : ' translate-x-0'
                } duration-1000`}
            >
                <span className="absolute  font-bold text-8xl">Hello</span>
            </h1>
            <div
                className={`  bottom-0 h-12  overflow-hidden transition-all ${
                    isFirstRender || isScroll ? '-translate-x-[1000px]' : 'translate-x-0'
                }  duration-1000 `}
            >
                <span className="absolute bottom-0 font-bold text-8xl">
                    Hello
                    <Underscore size={8} />
                </span>
            </div>
        </div>
    );

    return (
        <div className="sticky">
            <Header />
            <div
                id="first"
                className={` flex-col relative flex h-screen justify-center  items-center  group overscroll-y-none  transition-all duration-1000 `}
            >
                <div className="absolute">{helloElement()}</div>
                {!isScroll && <Glitch />}
                <button
                    className="absolute bottom-24 z-30"
                    onClick={() => handleGoToById('greeting')}
                >
                    <MdOutlineKeyboardDoubleArrowDown size={40} />
                </button>
            </div>
        </div>
    );
};
