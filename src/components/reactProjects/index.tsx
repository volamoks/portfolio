import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Carousel } from 'flowbite-react';

import { IoIosArrowUp } from 'react-icons/io';

export const ReactProjects = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const slidesArray = [1, 2, 3, 4, 5, 6];

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const modalClasses = isExpanded ? 'w-1/4 h-screen' : 'w-1/4 h-1/6';
    const buttonsClasses = isExpanded ? 'rotate-180' : 'rotate-0';
    const slides = slidesArray.map((slide, i) => {
        return (
            <Image
                key={i}
                src="/asos.png"
                width={1000}
                height={1000}
                // fill
                alt="Slide"
                className="object-cover"
            />
        );
    });

    return (
        <div
            id="myProjects"
            className="relative w-screen h-screen   "
        >
            <div className="  h-full max-w-screen ">
                <Carousel className="max-w-screen ">{slides}</Carousel>
            </div>
            <div
                className={`${modalClasses} absolute grid left-0 bottom-0 transition-all duration-[1500ms] bg-white hover text-2xl items-center`}
            >
                <div className="relative p-4">
                    <button>
                        <IoIosArrowUp
                            onClick={handleExpand}
                            className={`absolute hover top-0 right-8 rotate-180 transition-all ${buttonsClasses}`}
                            size={40}
                        ></IoIosArrowUp>
                    </button>

                    <h2 className="text-4xl uppercase font-bold mt-6">Asos clone </h2>

                    <p className={`text-xl my-4 italic ${isExpanded ? 'block' : 'hidden'}`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
                        voluptatum.
                    </p>
                </div>
            </div>
        </div>
    );
};
