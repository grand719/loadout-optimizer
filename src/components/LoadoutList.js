import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setLoadouts } from '../actions/loadouts'
import createSets from '../scripts/CreateSets'

import { Loadout } from './Loadout'

export const LoadList = () => {
    const dispatch = useDispatch()
    const items = useSelector((store) => store.items)
    const loadouts = useSelector((store) => store.loadouts)

    const createLoadouts = () => {

        dispatch(setLoadouts(createSets.showSets(items)))
    }

    return (
        <div className="loadout-list-wraper">
            <button onClick={createLoadouts}>Create loadouts</button>
            {loadouts.length > 0 && loadouts.map((loadout, idx)=> {
                return <Loadout {...loadout} key={idx}/>
            })}
        </div>
    )
}
