import React from 'react';

export const Underscore = ({ size = 5 }: { size?: number }) => {
    return (
        <span className={`text-red-500 font-bold text-${size}xl uppercase animate-pulse-fast`}>
            _
        </span>
    );
};
