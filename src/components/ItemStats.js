import React from 'react'
import { useSelector } from 'react-redux'

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
            <h1>{type}</h1>
            <p>mobility: {mobility}</p>
            <p>resilience: {resilience}</p>
            <p>recovery: {recovery}</p>
            <p>discipline: {discipline}</p>
            <p>intellect: {intellect}</p>
            <p>strength: {strength}</p> 
        </div>
    )
}


