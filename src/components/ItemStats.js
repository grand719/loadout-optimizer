import React from 'react'
import { useSelector } from 'react-redux'

import { StatBar } from './StatsBar'

export const ItemStats = () => {

    const options = useSelector((store) => store.itemStats.options)
    const {type, mobility, resilience, recovery, discipline, intellect, strength, masterWork} = useSelector((store) => store.itemStats.stats)
    const style = {
        position: "fixed",
        top: options.top ,
        left: options.left+60,
        display: options.visible ? "block" : "none"
    }

    return (
        <div  style={style} className={`item-stats--box ${masterWork && "item-stats-masterwork"}`}>
            <h1>{type && type.toUpperCase()}</h1>
            <p>mobility: {mobility}</p>
            <StatBar  value={mobility}/>
            <p>resilience: {resilience}</p>
            <StatBar  value={resilience}/>
            <p>recovery: {recovery}</p>
            <StatBar  value={recovery}/>
            <p>discipline: {discipline}</p>
            <StatBar  value={discipline}/>
            <p>intellect: {intellect}</p>
            <StatBar  value={intellect}/>
            <p>strength: {strength}</p> 
            <StatBar  value={strength}/>
        </div>
    )
}


