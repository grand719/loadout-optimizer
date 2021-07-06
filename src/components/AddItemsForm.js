import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../actions/items'

export const AddItemsForm = () => {

    const dispatch = useDispatch()

    const [type, setType] = useState('helmet')
    const [masterWork, setMasterWork] = useState(false)
    const [mobility, setMobility] = useState(0)
    const [resilience, setResilience] = useState(0)
    const [recovery, setRecovery] = useState(0)
    const [discipline, setDiscipline] = useState(0)
    const [intellect, setIntelect] = useState(0)
    const [strength, setStrength] = useState(0)

    const [display, setDisplay] = useState(false)



    const style = {
        display: display ? 'block' : 'none'
    }

    const showForm = () => {
        setDisplay(!display)
    }

    const addItemToStore = (e) => {
        e.preventDefault()
        setDisplay(false)
        dispatch(addItem({
            type,
            masterWork,
            mobility,
            resilience,
            recovery,
            discipline,
            intellect,
            strength
        }))
    }

    return (
        <div>
            <button onClick={showForm}>Add item</button>
            <div className="addItem-form" style={style}>
            <h3>Form</h3>
            <form onSubmit={addItemToStore}>
                <select value={type} onChange ={(e)=> setType(e.target.value)}>
                    <option value="helmet">Helmet</option>
                    <option value="gauntlets">Gauntlets</option>
                    <option value="chest">Chest</option>
                    <option value="legs">Legs</option>
                    <option value="classItem">Class item</option>
                </select>
                <input type="checkbox" checked={masterWork} onChange={(e)=> setMasterWork(e.target.checked)}/>
                <input type="number" value={mobility} max="100" onChange={(e)=> setMobility(+e.target.value)}/>
                <input type="number" value={resilience} max="100" onChange={(e)=> setResilience(+e.target.value)}/>
                <input type="number" value={recovery} max="100" onChange={(e)=> setRecovery(+e.target.value)}/>
                <input type="number" value={discipline} max="100" onChange={(e)=> setDiscipline(+e.target.value)}/>
                <input type="number" value={intellect} max="100" onChange={(e)=> setIntelect(+e.target.value)}/>
                <input type="number" value={strength} max="100" onChange={(e)=> setStrength(+e.target.value)}/>
                <button>Submit</button>
            </form>
            </div>
        </div>
    )
}