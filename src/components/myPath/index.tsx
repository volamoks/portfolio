import React from 'react';
import Image from 'next/image';
import { data } from '../../constants';
import { Carousel } from 'flowbite-react';
import { useComponentInView } from '@/hooks/useComponentInView';

export const MyPath = () => {
    const isInView = useComponentInView('myPath');

    console.log(isInView);
    const gridViewElem = data.map((item, i) => (
        <div
            key={item.id}
            className=" grid grid-cols-2 relative h-1/2 items-start "
        >
            <div className={` pl-6  ${i % 2 === 0 ? 'hidden' : ''}`}>
                <h1 className="text-3xl uppercase font-bold ">{item.name}</h1>
                <div className="">{item.description}</div>
            </div>
            <div className={`   ${i % 2 === 0 ? 'left-0' : 'right-0'}`}>
                <Image
                    alt={item.name}
                    src={item.img}
                    width={820}
                    height={700}
                ></Image>
            </div>
            <div className={` w-[80%]   ${i % 2 === 0 ? '' : 'hidden'}`}>
                <h1 className="text-3xl pl-6 uppercase font-bold ">{item.name}</h1>
                <div className="pl-6"> {item.description}</div>
            </div>
        </div>
    ));

    const carousel = (
        <div className="w-[80vw] h-[90vh] relative">
            <h1 className="uppercase text-2xl text-center font-bold py-8">
                My Long Path to webdev
            </h1>
            <Carousel slideInterval={5000}>
                {data.map((item, i) => (
                    <>
                        <Image
                            alt={item.name}
                            src={item.img}
                            fill
                        ></Image>
                        <div className="uppercase text-xl text-start font-bold px-4 py-12">
                            {item.name}
                        </div>
                        <div className="text-xl text-start  p-4">{item.description}</div>
                    </>
                ))}
            </Carousel>
        </div>
    );

    const transitionClasses = isInView
        ? 'translate-x-0 opacity-100'
        : '-translate-x-[100%] opacity-0';

    return (
        <div id="myPath">
            <div
                className={`grid  w-[100vw] h-full transition-all  duration-[1500ms]  ${transitionClasses} `}
            >
                {/* <div
                    className={`hidden lg:grid w-[100vw] h-[200vh] bg-gray-600 dark:bg-gray-800  `}
                ></div> */}
                <div className={` hidden w-full  lg:grid relative py-8 transition-all `}>
                    <h1 className="uppercase text-2xl text-center font-bold py-8">
                        My Long Path to webdev
                    </h1>
                    {gridViewElem}
                </div>
            </div>
            <div className="xl:hidden max-h-screen h-[110vh] w-screen relative">{carousel}</div>
        </div>
    );
};
