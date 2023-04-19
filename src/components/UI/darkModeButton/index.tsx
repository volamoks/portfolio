import { useDarkMode } from '@/components/darkModeProvider';

import { MdDarkMode, MdSunny } from 'react-icons/md';

export const DarkModeBtn = () => {
    const { handleDarkMode, isDarkMode } = useDarkMode();

    return (
        <button
            onClick={handleDarkMode}
            className="absolute left-6 top-6 z-20 "
        >
            {!isDarkMode ? <MdDarkMode size={40} /> : <MdSunny size={40} />}
        </button>
    );
};
