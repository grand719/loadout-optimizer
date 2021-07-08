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
        <div >
            <button onClick={showForm}>Add item</button>
            <div className="addItem-form" style={style}>
            <h2>Form</h2>
            <form onSubmit={addItemToStore}>
                <label>
                    <p>Type</p>
                    <select value={type} onChange ={(e)=> setType(e.target.value)}>
                        <option value="helmet">Helmet</option>
                        <option value="gauntlets">Gauntlets</option>
                        <option value="chest">Chest</option>
                        <option value="legs">Legs</option>
                        <option value="classItem">Class item</option>
                    </select>
                </label>
                <label>
                    <p>Mobility</p>
                    <input type="number" value={mobility} max="100" onChange={(e)=> setMobility(+e.target.value)}/>
                </label>
                <label>
                    <p>Resilience</p>
                    <input type="number" value={resilience} max="100" onChange={(e)=> setResilience(+e.target.value)}/>
                </label>
                <label>
                    <p>Recovery</p>
                    <input type="number" value={recovery} max="100" onChange={(e)=> setRecovery(+e.target.value)}/>
                </label>
                <label>
                    <p>Discipline</p>
                    <input type="number" value={discipline} max="100" onChange={(e)=> setDiscipline(+e.target.value)}/>
                </label>
                <label>
                    <p>Intellect</p>
                    <input type="number" value={intellect} max="100" onChange={(e)=> setIntelect(+e.target.value)}/>
                </label>
                <label>
                    <p>Strength</p>
                    <input type="number" value={strength} max="100" onChange={(e)=> setStrength(+e.target.value)}/>
                </label>
                <label>
                    <p>Master work</p>
                    <input type="checkbox" checked={masterWork} onChange={(e)=> setMasterWork(e.target.checked)}/>
                </label>
                <button>Submit</button>
            </form>
            </div>
        </div>
    )
}