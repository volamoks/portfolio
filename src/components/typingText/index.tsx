import React from 'react';
import Typewriter from 'typewriter-effect';

export const TypingText = () => {
    const typingName = (
        <Typewriter
            onInit={typewriter => {
                typewriter
                    .pauseFor(1500)
                    .typeString('<span>Hi, my name is Saidabror')
                    .pauseFor(300)
                    .deleteChars(9)
                    .typeString('<span style="text-red-500;">Abror</span><span>')
                    .pauseFor(300)
                    // .typeString(
                    //     '<span style="font-size: 0.5em;">And I am a software developer</span>',
                    // )
                    .pauseFor(1000)
                    .start();
            }}
        />
    );

    const typingInfo = (
        <Typewriter
            onInit={typewriter => {
                typewriter.pauseFor(5500).typeString('And I am a software developer').start();
            }}
        />
    );

    return <h1 className="text-white font-bold text-5xl uppercase flex flex-col">{typingName}</h1>;
};
