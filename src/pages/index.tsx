import Head from 'next/head';

import styles from '@/styles/Home.module.css';
import { MainPage } from '@/components/mainPage';
import { createContext } from 'react';

import { DarkModeProvider } from '@/components/darkModeProvider';

export const DarkModeContext = createContext<ICreateContext | null>(null);

interface ICreateContext {
    isDarkMode: boolean;
    handleDarkMode: () => void;
}

export default function Home() {
    return (
        <>
            <Head>
                <title>My Portfolio</title>
                <meta
                    name="description"
                    content="Saidbaror's Portfolio"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>
            <main className={styles.main}>
                <div className="relative max-w-screen">
                    <DarkModeProvider>
                        <MainPage />
                    </DarkModeProvider>
                </div>
            </main>
        </>
    );
}
