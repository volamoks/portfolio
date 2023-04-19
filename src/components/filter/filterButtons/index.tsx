import { iFilterArray } from '@/types';
import { motion } from 'framer-motion';

interface IFilterButtons {
    filter: string;
    handleSetFilter: (arg0: string) => void;
    filteredData: iFilterArray[];
}

export const FilterButtons = ({
    handleSetFilter,
    filter: propsFilter,
    filteredData,
}: IFilterButtons) => {
    const filterButtons = (arr: iFilterArray[]) =>
        arr?.map((filter, i) => (
            <motion.div
                key={filter.id}
                animate
                className=""
            >
                <button
                    className={`w-24 h-24  uppercase text-xl font-bold p-2 flex justify-center items-center hover:scale-125 transition-all ${
                        propsFilter === filter.name.toLowerCase() ? 'bg-red-500 text-white' : '  '
                    }`}
                    key={filter.id}
                    onClick={() => handleSetFilter(filter.name.toLowerCase())}
                >
                    {filter.component}
                </button>
            </motion.div>
        ));

    return (
        <div className="hidden lg:flex  w-[100vw] bg-gray-500 dark:bg-gray-600 mb-1">
            {filterButtons(filteredData)}
        </div>
    );
};
