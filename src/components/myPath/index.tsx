import React from 'react';
import Image from 'next/image';
import { data } from '../constatnts';
import { Carousel } from 'flowbite-react';

export const MyPath = () => {
    const gridViewElem = data.map((item, i) => (
        <div
            key={item.id}
            className=" flex relative h-1/2 items-center "
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
            <div className={`   ${i % 2 === 0 ? '' : 'hidden'}`}>
                <div className="w-1/3">{item.name}</div>
                <div>{item.description}</div>
            </div>
        </div>
    ));

    const carousel = (
        <div className="w-full h-full py6">
            <h1 className="uppercase text-2xl text-center font-bold py-8">
                My Long Path to webdev
            </h1>
            <Carousel slideInterval={5000}>
                {data.map((item, i) => (
                    <>
                        <Image
                            alt={item.name}
                            src={item.img}
                            width={820}
                            height={700}
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

    const elem = <div className=" relative">{gridViewElem}</div>;
    return (
        <>
            <div className=" hidden lg:grid   relative">{gridViewElem}</div>
            <div className="xl:hidden max-h-screen h-[90vh] w-screen relative">{carousel}</div>
        </>
    );
};
