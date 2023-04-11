import { JSXElementConstructor } from 'react';

interface Ih1Header {
    children: string;
    textSize: string;
}

export const H1HeaderLight = ({ children, textSize = '5xl' }: Ih1Header) => {
    return <h1 className={`text-${textSize}} text-slate-600 dark:slate-100`}>{children}</h1>;
};

export const H1HeaderDark = ({ children, textSize = '5xl' }: Ih1Header) => {
    return <h1 className={`text-${textSize}} dark:text-slate-600 slate-100`}>{children}</h1>;
};
