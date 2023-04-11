
import { icons1 } from '../constatnts';

interface IFilterData {
    id: number;
    name: string;
}
interface IFilterButtons {
    selectedFilter: string;
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const filtersData: IFilterData[] = [
    { id: 1, name: 'All' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'TypeScript' },
    { id: 4, name: 'React' },
];

export const FilterButtons = ({ handleClick, selectedFilter, handleSelect }: IFilterButtons) => {
    const buttons = filtersData.map((filter, i) => (
        <button
            className={`w-36 h-12 uppercase text-xl font-bold p-2 ${
                selectedFilter === filter.name.toLowerCase() ? 'bg-red-500 text-white' : '  '
            }`}
            key={filter.id}
            onClick={handleClick}
        >
            {filter.name}
        </button>
    ));

    const selectElem = (
        <select
            className={` bg-gray-200 dark:bg-gray-600 border-none font-bold uppercase text-xl  `}
            onChange={handleSelect}
            value={selectedFilter}
        >
            {icons1().map((icon, i) => (
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
    return (
        <div className="flex gap-8xl:gap-16 justify-center my-12 xl:mb-28">
            <div className="hidden md:flex">{buttons}</div>
            {selectElem}
        </div>
    );
};
