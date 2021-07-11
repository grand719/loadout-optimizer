import React from 'react'

export const StatBar = ({value}) => {

    const style = {
        width: `${value > 100 ? 100 : value}%`,
    }

    return (
        <div className="stat-background">
            <div style={style} className="stat-progrss-bar"></div>
        </div>
    )
}