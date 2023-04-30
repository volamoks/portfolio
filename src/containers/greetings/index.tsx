import React from 'react';
import Link from 'next/link';

import { TypingText } from '../../components/UI/typingTextEffect';
import { useComponentInView } from '@/hooks/useComponentInView';

export const Greetings = () => {
    const isComponentInView = useComponentInView('greeting');

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
                        <div>
                            Have a strong passion for creating beautiful and functional user
                            interfaces and web applications.
                        </div>
                        <div>
                            Expertise includes working with modern front-end technologies such as
                            TypeScript, Tailwind CSS, React + Redux and Next.js.
                        </div>
                        <div>
                            Quick learner, a team player, seeking new opportunities to further
                            develop my skills and contribute to meaningful projects.
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-red-500 text-white font-bold text-xl text-center xl:hover:scale-110 w-1/3 xl:w-1/5 p-4 transition-all">
                <a
                    href=""
                    className=""
                >
                    Get my CV
                </a>
            </div>
        </div>
    );
};
