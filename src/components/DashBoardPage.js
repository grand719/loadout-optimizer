import React from 'react';

import { ItemsList } from './ItemsList';
import { LoadList } from './LoadoutList';
import { ItemStats } from './ItemStats';
import { FilterForm } from './FilterForm';

export const DashBoardPage = () => {

    return(
        <div className="loadot-optimizer-wraper">
            <ItemsList />
            <LoadList />
            <ItemStats />
            <FilterForm />
        </div>
    )
}