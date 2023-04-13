import { Layout } from '@/components/layout';
import { useGoToPageByRef } from '@/hooks/useGoToPageByRef';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';

export const ProjectPage: FC = () => {
    const { ref, handleClick } = useGoToPageByRef();
    const router = useRouter();

    const handleGoto = () => {
        router.push('/');
        handleClick(ref?.contactsRef);
    };

    return (
        <Layout nth={1}>
            <div className="py-24 max-w-screen-xl h-screen mx-auto overflow-y-auto">
                <button onClick={handleGoto}>
                    <MdArrowBackIosNew />
                </button>
                <h1 className="text-4xl font-bold my-8">Project Management UI</h1>
                <div className="grid w-full">
                    <div className="grid grid-cols-3 gap-12">
                        <div className=" relative">
                            <img
                                src="/asos.png"
                                alt="asos"
                            ></img>
                        </div>

                        <div className=" relative">
                            <img
                                src="/asos.png"
                                alt="asos"
                            ></img>
                        </div>
                        <div className=" relative">
                            <img
                                src="/asos.png"
                                alt="asos"
                            ></img>
                        </div>

                        <div className="">
                            <h1 className="text-2xl font bold my-4">About Client</h1>
                            <div>
                                Objective Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Optio, natus! Quibusdam enim quod in esse, mollitia molestias
                                incidunt quas ipsa accusamus veniam.
                            </div>
                            <h1 className="text-2xl font bold  my-4">Objective</h1>
                            <div>
                                Tools & Technologies HTML, CSS, JavaScript, Vue.js, TailwindCSS,
                                AdobeXD
                            </div>
                            <h1 className="text-2xl font bold  my-4">Tools & Technologies</h1>
                            <div>
                                Tools & Technologies HTML, CSS, JavaScript, Vue.js, TailwindCSS,
                                AdobeXD
                            </div>
                        </div>
                        <div className=" col-span-2">
                            <h1 className="text-2xl font bold  my-4">Challenge</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel
                                illum asperiores dignissimos cumque quibusdam et fugiat voluptatem
                                nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi
                                corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet
                                consectetur adipisicing elit. Incidunt totam dolorum, ducimus
                                obcaecati, voluptas facilis molestias nobis ut quam natus similique
                                inventore excepturi optio ipsa deleniti fugit illo. Unde, amet!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo
                                necessitatibus perspiciatis! Aperiam perferendis labore temporibus,
                                eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit
                                libero tenetur neque consequatur ea. Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Nihil vel illum asperiores dignissimos
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full   border-y my-12">
                    <h1 className="text-2xl font bold  my-4">Related Projects</h1>
                    <div className="grid grid-cols-4 gap-16">
                        <div className=" relative">
                            <img
                                src="/asos.png"
                                alt="asos"
                            ></img>
                        </div>
                        <div className=" relative">
                            <img
                                src="/asos.png"
                                alt="asos"
                            ></img>
                        </div>
                        <div className=" relative">
                            <img
                                src="/asos.png"
                                alt="asos"
                            ></img>
                        </div>
                        <div className=" relative">
                            <img
                                src="/asos.png"
                                alt="asos"
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
