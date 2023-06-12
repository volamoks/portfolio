import React from 'react';

import { useComponentInView } from '@/hooks/useComponentInView';
import { greetingData } from '@/constants';
import { TypingText } from '@/components';

export const Greetings = () => {
    const isComponentInView = useComponentInView('greeting');

    const link = process.env.NEXT_PUBLIC_CV_URL;

    return (
        <div
            id="greeting"
            className=" sticky min-h-screen grid  items-center justify-center gap-4 p-4"
        >
            <div className=" flex flex-col gap-8 self-end">
                <div
                    className=" layers flex-col group type_text "
                    data-text="Abror"
                >
                    {isComponentInView && <TypingText />}
                </div>
                <div className=" text-xl italic w-1/2">
                    <div className="grid gap-2">
                        {greetingData.map(item => (
                            <div key={item}>{item}</div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-red-500 text-white font-bold text-xl text-center xl:hover:scale-110 w-1/3 xl:w-1/5 p-4 transition-all">
                <a
                    href={link}
                    className=""
                >
                    Get my CV
                </a>
            </div>
        </div>
    );
};
