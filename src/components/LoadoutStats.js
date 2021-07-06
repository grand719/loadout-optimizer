import React from 'react'

export const LoadoutStats = ({intellect, mobility, recovery, resiliance, strength, discipline}) => {

    return (
        <div className="loadout-stats-wraper">
            <p>Intellect: {intellect}</p>
            <p>Mobility: {mobility}</p>
            <p>Recovery: {recovery}</p>
            <p>Resiliance: {resiliance}</p>
            <p>Strength: {strength}</p>
            <p>Discipline: {discipline}</p>
        </div>
    )

}