import { iFilterArray } from '@/types';
import React from 'react';

interface ISelectElement {
    arr: iFilterArray[];
    filter: string;
    handleSetFilter: (arg0: string) => void;
}

export const SelectElement = ({ arr, filter, handleSetFilter }: ISelectElement) => {
    const selectElem = (
        <select
            className="bg-gray-600 dark:bg-gray-800 border-none font-bold uppercase text-xl"
            onChange={e => handleSetFilter(e.target.value)}
            value={filter}
        >
            {arr.map((icon, i) => (
                <option
                    key={icon.id + 'select'}
                    value={icon.name.toLowerCase()}
                    className={` text-center ${
                        filter === icon.name.toLowerCase() ? 'bg-red-500 text-white' : ''
                    }`}
                >
                    {icon.name}
                </option>
            ))}
        </select>
    );

    return <div className="mb-12">{selectElem}</div>;
};
