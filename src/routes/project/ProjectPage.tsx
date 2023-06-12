import { FC, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { nanoid } from '@reduxjs/toolkit';
import { Carousel, Spinner } from 'flowbite-react';

import { MainPageLayout } from '@/providers/layout/MainPageLayout';
import { Header } from '@/entities/Header/Header';
import { RelatedProjects } from '@/containers/relatedProjects/RelatedProjects';
import { FrameworksIcons } from '@/components/UI/FrameworksIcons/FrameworksIcons';

import { useFetchData } from '@/hooks/useLocalData';
import { SiGithub } from 'react-icons/si';
import { MdArrowBackIosNew } from 'react-icons/md';
import { TbWorldWww } from 'react-icons/tb';

import { IProjectData } from '@/types';

export const ProjectPage: FC = () => {
    const router = useRouter();
    const projectName = router.asPath.split('/')[1].replace(/%20/g, ' ');
    const { data, isLoading, error } = useFetchData<IProjectData>('/api/localDataProjects');

    const myRef = useRef<HTMLInputElement>(null);

    const currentProject = data?.filter((item) => item.name === projectName)[0];

    const handleGoToRelated = (name: string) => {
        router.push('/' + name);
        myRef?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    if (isLoading) return <Spinner />;
    if (error) return <div>{error}</div>;
    if (!currentProject) return <div>Some Error</div>;

    const desktopImages = currentProject?.images?.map((image) => (
        <div key={nanoid()} className='relative h-full w-full'>
            <Image
                src={'/' + image}
                alt={currentProject.name}
                fill
                className='object-contain justify-start  '
            ></Image>
        </div>
    ));

    const description = (
        <>
            <div className=''>
                <h1 className='text-2xl font-bold  my-4'>Tools & Technologies</h1>

                <div className='flex gap-2 my-4 '>
                    <FrameworksIcons project={currentProject} iconsSize={40} />
                </div>
                <h1 className='text-2xl font-bold mt-8 my-4'>Links to Project</h1>
                <div className='flex gap-2 '>
                    <Link
                        className='hover:scale-125 transition-all'
                        href={currentProject?.web_link}
                    >
                        <TbWorldWww size={40} />
                    </Link>
                    <Link className='hover:scale-125 transition-all' href={currentProject?.github}>
                        <SiGithub size={40} />
                    </Link>
                </div>
            </div>
            <div className=' col-span-2'>
                <h1 className='text-2xl font-bold  my-4'>About Project</h1>
                <p>{currentProject.description}</p>
            </div>
        </>
    );

    return (
        <MainPageLayout nth={0}>
            <>
                <Header />

                <div className='py-24 h-screen mx-auto overflow-y-auto px-12 overflow-hidden  '>
                    <button
                        type='button'
                        id='project_header'
                        onClick={() => router.push('/#projects')}
                    >
                        <MdArrowBackIosNew size={30} />
                    </button>

                    <h1
                        ref={myRef}
                        id='project_header'
                        className='xl:text-5xl text-2xl font-bold my-8 uppercase '
                    >
                        {currentProject?.name}
                    </h1>

                    <div className='h-full'>
                        <Carousel>{desktopImages}</Carousel>
                    </div>

                    <div className='grid xl:grid-cols-3 text-xl'>{description}</div>

                    <RelatedProjects
                        id={currentProject?.id}
                        handleGoToRelated={handleGoToRelated}
                    />
                </div>
            </>
        </MainPageLayout>
    );
};
