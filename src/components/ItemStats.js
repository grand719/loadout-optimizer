import React, { useState, useRef, useCallback } from 'react'
import { useSelector} from 'react-redux'

import { StatBar } from './StatsBar'

export const ItemStats = () => {

    const options = useSelector((store) => store.itemStats.options)
    const {type, mobility, resilience, recovery, discipline, intellect, strength, masterWork} = useSelector((store) => store.itemStats.stats)

    const [height, setHeight] = useState(null);

    const windowHeight = window.innerHeight;

    const div = useCallback(node => {
        if(node !== null) {
            setHeight(node.getBoundingClientRect().height)
        }
    })

    const style = {
        position: "fixed",
        top: windowHeight > options.top+height ? options.top : options.top - (height) + options.height,
        left: options.left+60,
        display: options.visible ? "block" : "none"
    }

    return (
        <div ref={div} style={style} className={`item-stats--box ${masterWork && "item-stats-masterwork"}`}>
            <h1>{type && type.toUpperCase()}</h1>
            <StatBar  options={{mobility}}/>
            <StatBar  options={{resilience}}/>
            <StatBar  options={{discipline}}/>
            <StatBar  options={{intellect}}/>
            <StatBar  options={{strength}}/>
            <StatBar  options={{recovery}}/>
        </div>
    )
}


