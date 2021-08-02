import React from 'react'

import { StatBar } from './StatsBar'

export const LoadoutStats = ({intellect, mobility, 
    recovery, resilience, strength, discipline}) => {

    return (
        <div className="loadout-stats-wraper">
            <StatBar  options={{mobility}}/>
            <StatBar  options={{resilience}}/>
            <StatBar  options={{discipline}}/>
            <StatBar  options={{intellect}}/>
            <StatBar  options={{strength}}/>
            <StatBar  options={{recovery}}/>
        </div>
    )

}