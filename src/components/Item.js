import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../actions/items'

import { setItemStats } from '../actions/itemStats'

export const Item = (
    {
        id,
        type,
        masterWork,
        mobility,
        resilience,
        recovery,
        discipline,
        intellect,
        strength, 
        usedByLoadout}) => {

    

    const dispatch = useDispatch()

    const removeItemFromStore = () => {
        dispatch(setItemStats({
            stats:{type:0, mobility:0, resilience:0, recovery:0, discipline:0, intellect:0, strength:0},
            options:{top: 0, left: 0, visible: false}
            }))

        dispatch(removeItem(id))
    }

    const setStats = (e) => {
        const div = e.target.getBoundingClientRect()

        dispatch(setItemStats({
            stats:{type, mobility, resilience, recovery, discipline, intellect, strength, masterWork},
            options:{top: parseInt(div.top), left: parseInt(div.left), visible: true}}))
    }

    const setLeavStats = (e) => {
        const div = e.target.getBoundingClientRect()

        dispatch(setItemStats({
            stats:{type, mobility, resilience, recovery, discipline, intellect, strength, masterWork},
            options:{top: parseInt(div.top), left: parseInt(div.left), visible: false}
            }))
    }

    return (
        <div className={`item-wraper ${masterWork && "item-masterwork"}`}
        onMouseEnter = {setStats} 
        onMouseLeave={setLeavStats}>
        {!usedByLoadout && <button className="item-delete" onClick={removeItemFromStore}>x</button> }
        {/* <div className="item-name">{type} </div> */}
            
        </div>
    )
} 