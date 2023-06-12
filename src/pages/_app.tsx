import { StrictMode } from 'react';

import { Provider } from 'react-redux';
import { store } from '@/utils/store/store';

import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';

import { DarkModeProvider } from '@/providers/darkModeProvider';
import { Analytics } from '@vercel/analytics/react';
import '@/styles/styles.css';

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
                        <Analytics />
                    </DarkModeProvider>
                </Provider>
            </main>
        </StrictMode>
    );
}
