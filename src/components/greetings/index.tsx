import React from 'react';
import { IRefProps } from '../../types';
import { TypingText } from '../UI/typingTextEffect';
import { useComponentInView } from '@/hooks/useComponentInView';

export const Greetings = ({ myRef }: IRefProps) => {
    const isComponentInView = useComponentInView('greeting');

    return (
        <div
            ref={myRef}
            id="greeting"
            className=" h-screen flex items-center justify-center gap-4 p-4"
        >
            <div className="flex flex-col gap-8">
                <div
                    className=" layers flex-col group type_text "
                    data-text="Abror"
                >
                    {isComponentInView && <TypingText />}
                </div>
                <div className=" text-xl italic w-1/2">
                    All you need to create the perfect exhibition room that every designer, artist
                    and illustrator dreams of.
                </div>
            </div>
        </div>
    );
};
