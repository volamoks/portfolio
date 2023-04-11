import FC from 'react';

interface IDarkContainer {
    children: React.ReactNode;
}

export const DarkContainer = ({ children }: IDarkContainer) => {
    return (
        <div className="bg-gray-600 dark:bg-gray-800 text-gray-200 dark:text-gray-200 ">
            {children}
        </div>
    );
};

export const LightContainer = ({ children }: IDarkContainer) => {
    return (
        <div className="bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-200 ">
            {children}
        </div>
    );
};
