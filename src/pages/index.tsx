import { createContext } from 'react';
import Head from 'next/head';

import { MainPage } from '@/routes/mainPage';
import { DarkModeProvider } from '@/components/darkModeProvider';

import styles from '@/styles/Home.module.css';

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
                    content="Saidabror's Portfolio"
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
