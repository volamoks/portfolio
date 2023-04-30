import '@/styles/styles.css';

import { store } from '@/utils/store/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Poppins } from 'next/font/google';

import { StrictMode } from 'react';
import React from 'react';
import { DarkModeProvider } from '@/components/darkModeProvider';
import Head from 'next/head';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <StrictMode>
            <main className={poppins.className}>
                <Provider store={store}>
                    <DarkModeProvider>
                        <Component {...pageProps} />
                    </DarkModeProvider>
                </Provider>
            </main>
        </StrictMode>
    );
}
