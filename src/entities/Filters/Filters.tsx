import { useSetFilter } from '@/hooks/useSetFilter';

import { useMemo } from 'react';

import { FilterButtonGroup } from '..';
import { FilterButtons, SelectElement } from '@/components/UI';
import { filterGroup } from '@/constants';

interface IFilterButtons {
    filter: string;
    handleSetFilter: (arg0: string) => void;
}
const iconsSize = 50;
const dataArr = filterGroup(iconsSize);

export const Filters = ({ handleSetFilter, filter: propsFilter }: IFilterButtons) => {
    const { handleSetFilter: handleSetFilterGroup, filter: filterGroup } = useSetFilter(
        dataArr[0].name,
    );

    const filteredData = useMemo(
        () =>
            filterGroup === 'all'
                ? dataArr[0]?.arr
                : dataArr?.filter(obj => obj.name === filterGroup)[0]?.arr,
        [filterGroup],
    );

    return (
        <div
            id="stack"
            className="flex flex-col justify-center mt-12 xl:mb-8"
        >
            <FilterButtonGroup
                dataArr={dataArr}
                filter={filterGroup}
                handleClickFilter={handleSetFilterGroup}
            />

            <FilterButtons
                filter={propsFilter}
                handleSetFilter={handleSetFilter}
                filteredData={filteredData}
            />
            <SelectElement
                arr={dataArr[0]?.arr}
                filter={propsFilter}
                handleSetFilter={handleSetFilter}
            />
        </div>
    );
};
