import { Layout } from '@/components/layout';
import { useGoToPageByRef } from '@/hooks/useGoToPageByRef';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';

import Image from 'next/image';
import { nanoid } from '@reduxjs/toolkit';
import { Carousel } from 'flowbite-react';
import { useFetchData } from '@/hooks/useLocalData';
import { IProjectData } from '@/types';
import { RelatedProjects } from '@/components/relatedProjects';

export const ProjectPage: FC = () => {
    const { ref, handleClick } = useGoToPageByRef();
    const router = useRouter();
    const projectId = +router.asPath.split('/')[1];
    const { data, isLoading, error } = useFetchData<IProjectData>('/api/localDataProjects');

    isLoading === false && console.log(data);

    const currentProject = data.filter(item => item.id === projectId)[0];

    const handleGoto = () => {
        const query = { ref: 'contactsRef' };
        router.push({
            pathname: '/',
            query: query,
        });
    };

    if (isLoading) return <div>Loading... </div>;
    if (error) return <div>{error}</div>;

    const desktopImages = currentProject?.images?.map((image, i) => (
        <div
            key={nanoid()}
            className="relative h-full w-full"
        >
            <Image
                src={'/' + image}
                alt={currentProject.name}
                fill
                className="object-contain justify-start  "
            ></Image>
        </div>
    ));

    const description = (
        <>
            <div className="">
                <h1 className="text-2xl font bold  my-4">Objective</h1>
                <div>Tools & Technologies HTML, CSS, JavaScript, Vue.js, TailwindCSS, AdobeXD</div>
                <h1 className="text-2xl font bold  my-4">Tools & Technologies</h1>
                <div>Tools & Technologies HTML, CSS, JavaScript, Vue.js, TailwindCSS, AdobeXD</div>
            </div>
            <div className=" col-span-2">
                <h1 className="text-2xl font bold  my-4">Challenge</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum
                    asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit
                    explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium
                    adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut
                    quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde,
                    amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo
                    necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa
                    corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque
                    consequatur ea. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                    vel illum asperiores dignissimos
                </p>
            </div>
        </>
    );

    return (
        <Layout nth={1}>
            <div className="py-24 h-screen mx-auto overflow-y-auto px-12 overflow-hidden  ">
                <button onClick={handleGoto}>
                    <MdArrowBackIosNew />
                </button>
                <h1 className="text-4xl font-bold my-8">{currentProject?.name}</h1>

                {/* <div className="flex relative justify-between w-full gap-2 h-[50%]">
                    {desktopImages}
                </div> */}
                <div className="h-2/3">
                    <Carousel>{desktopImages}</Carousel>
                </div>

                <div className="grid xl:grid-cols-3">{description}</div>

                <RelatedProjects id={projectId} />
            </div>
        </Layout>
    );
};
