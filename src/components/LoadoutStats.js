import React from 'react'

import { StatBar } from './StatsBar'

export const LoadoutStats = ({intellect, mobility, 
    recovery, resilience, strength, discipline}) => {

    return (
        <div className="loadout-stats-wraper">
            <p>Intellect: {intellect}</p>
                <StatBar  value={intellect}/>
            <p>Mobility: {mobility}</p>
                <StatBar  value={mobility}/>
            <p>Recovery: {recovery}</p>
                <StatBar  value={recovery}/>
            <p>Resiliance: {resilience}</p>
                <StatBar  value={resilience}/>
            <p>Strength: {strength}</p>
                <StatBar  value={strength}/>
            <p>Discipline: {discipline}</p>
                <StatBar  value={discipline}/>
        </div>
    )

}