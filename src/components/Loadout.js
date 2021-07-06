import React from 'react'

import { Item } from './Item'
import { LoadoutStats } from './LoadoutStats'

export const Loadout = ({chest, classItem, gauntlets, helmet, legs, stats}) => {



    return (
        <div className="loadout-wraper">
            <div className="loadout-wraper--items">
            <Item {...helmet} usedByLoadout={true}/>
            <Item {...gauntlets} usedByLoadout={true}/>
            <Item {...chest} usedByLoadout={true}/>
            <Item {...legs} usedByLoadout={true}/>
            <Item {...classItem} usedByLoadout={true}/>
            </div>
            <LoadoutStats {...stats} usedByLoadout={true}/>
        </div>
    )
}