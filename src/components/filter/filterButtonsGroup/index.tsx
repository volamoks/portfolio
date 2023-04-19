import { IFilterGroup } from '@/types';
import { motion } from 'framer-motion';

import React, { useMemo } from 'react';

interface IFilterButtons {
    dataArr: IFilterGroup[];
    filter: string;
    handleClickFilter: (arg0: string) => void;
}
export const FilterButtonGroup = React.memo(
    ({ dataArr, filter, handleClickFilter }: IFilterButtons) => {
        const filterGroup = useMemo(
            () =>
                dataArr.map(group => (
                    <button
                        key={group.id}
                        onClick={() => handleClickFilter(group.name)}
                        className={`w-full flex justify-around uppercase  p-2 xl:p-6 text-xl xl:text-2xl font-bold ${
                            filter === group.name ? 'bg-gray-500  dark:bg-gray-600' : ''
                        } `}
                    >
                        {group.name}
                    </button>
                )),
            [dataArr, filter, handleClickFilter],
        );

        return <motion.div className="hidden lg:flex justify-around">{filterGroup}</motion.div>;
    },
);
FilterButtonGroup.displayName = 'FilterButtonGroup';
