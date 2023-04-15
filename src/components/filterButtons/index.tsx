import { motion } from 'framer-motion';
import { useState } from 'react';
import { icons1, icons2, icons3 } from '../../constants';

interface IFilterButtons {
    selectedFilter: string;
    handleClick: (arg0: string) => void;
    handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    setSelectedFilter: (arg0: string) => void;
}

interface iFilterArray {
    id: number;
    name: string;
    component: JSX.Element;
}
export const FilterButtons = ({
    handleClick,
    selectedFilter,
    handleSelect,
    setSelectedFilter,
}: IFilterButtons) => {
    const [filtersType, setFiltersType] = useState(111);
    console.log(selectedFilter);

    const dataArr = [
        { id: 111, name: 'My stack', arr: icons1(50) },
        { id: 222, name: 'Love to use', arr: icons2(50) },
        { id: 333, name: 'On the way to know better', arr: icons3(50) },
    ];

    const handleClickFilterType = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        setSelectedFilter('all');
        setFiltersType(id);
    };

    const filteredData = dataArr.filter(obj => obj.id === filtersType)[0]?.arr;

    const buttons = (arr: iFilterArray[]) =>
        arr.map((filter, i) => (
            <motion.div
                key={filter.id}
                animate
                className=""
            >
                <button
                    className={`w-24 h-24  uppercase text-xl font-bold p-2 flex justify-center items-center hover:scale-125 transition-all ${
                        selectedFilter === filter.name.toLowerCase()
                            ? 'bg-red-500 text-white'
                            : '  '
                    }`}
                    key={filter.id}
                    onClick={() => handleClick(filter.name.toLowerCase())}
                >
                    {filter.component}
                </button>
            </motion.div>
        ));

    const selectElem = (arr: iFilterArray[]) => (
        <select
            className="bg-gray-600 dark:bg-gray-800 border-none font-bold uppercase text-xl"
            onChange={handleSelect}
            value={selectedFilter}
        >
            {arr.map((icon, i) => (
                <option
                    key={icon.id + 'select'}
                    className={` text-center ${
                        selectedFilter === icon.name.toLowerCase() ? 'bg-red-500 text-white' : ''
                    }`}
                    value={icon.name.toLowerCase()}
                >
                    {icon.name}
                </option>
            ))}
        </select>
    );

    const iconsTypeList = dataArr.map(type => (
        <button
            key={type.id}
            onClick={e => handleClickFilterType(e, type.id)}
            className={`w-full flex justify-around uppercase  p-2 xl:p-6 text-xl xl:text-2xl font-bold ${
                filtersType === type.id ? 'bg-gray-500  dark:bg-gray-600' : ''
            } `}
        >
            {type.name}
        </button>
    ));

    return (
        <div className="flex flex-col justify-center mt-12 xl:mb-8">
            <motion.div className="hidden lg:flex justify-around  ">{iconsTypeList}</motion.div>

            <div className="hidden lg:flex  w-[100vw] bg-gray-500 dark:bg-gray-600 mb-1">
                {buttons(filteredData)}
            </div>
            <div className="mt-6">{selectElem(icons1())}</div>
        </div>
    );
};
