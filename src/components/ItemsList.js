import  React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Item } from './Item'
import { AddItemsForm } from './AddItemsForm';

export const ItemsList = () => {

    const helmet = useSelector((store) => store.items.filter((item) => item.type === "helmet"))
    const gauntlets = useSelector((store) => store.items.filter((item) => item.type === "gauntlets"))
    const chest = useSelector((store) => store.items.filter((item) => item.type === "chest"))
    const legs = useSelector((store) => store.items.filter((item) => item.type === "legs"))
    const classItem = useSelector((store) => store.items.filter((item) => item.type === "classItem"))

    return (
        <div className="item-list-wraper">
            
            <AddItemsForm />

            <h4 ><p>Helmet</p></h4>
            <div className="items-wraper">
                {helmet.map((item, idx)=>{
                    return <Item {...item} key={idx} usedByLoadout={false} />
                })}
            </div>
            <h4><p>Gauntlets</p></h4>
            <div className="items-wraper">
                {gauntlets.map((item, idx)=>{
                    return <Item {...item} key={idx} usedByLoadout={false}/>
                })}
            </div>
            <h4><p>Chest</p></h4>
            <div className="items-wraper">
                {chest.map((item, idx)=>{
                    return <Item {...item} key={idx} usedByLoadout={false}/>
                })}
            </div>
            <h4><p>Legs</p></h4>
            <div className="items-wraper">
                {legs.map((item, idx)=>{
                    return <Item {...item} key={idx} usedByLoadout={false}/>
                })}
            </div>
            <h4><p>Class Item</p></h4>
            <div className="items-wraper">
                {classItem.map((item, idx)=>{
                    return <Item {...item} key={idx} usedByLoadout={false}/>
                })}
            </div>

        </div>
    )
}