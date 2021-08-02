import React from 'react'

export const StatBar = ({options}) => {

    const style = {
        width: `${Object.values(options)[0] > 100 ? 100 : Object.values(options)[0]}%`, 
    }


    return (
        <div className="stat-background">
            <p>{`${Object.getOwnPropertyNames(options)[0]}: ${Object.values(options)[0]}`}</p>
            <div style={style} className="stat-progrss-bar"></div>
        </div>
    )
}