import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addFilter} from '../actions/filters'

export const  FilterForm = () => {

    const filters = useSelector((store) => store.filters)

    
    
    const [mobility, setMobility] = useState(filters.mobility)
    const [resilience, setResilience] = useState(filters.resilience)
    const [recovery, setRecovery] = useState(filters.recovery)
    const [discipline, setDiscipline] = useState(filters.discipline)
    const [intellect, setIntellect] = useState(filters.intellect)
    const [strength, setStrength] = useState(filters.strength)

    const dispatch = useDispatch()

    const onSubmitHandel = (e) => {
        e.preventDefault()

        dispatch(addFilter({
            mobility,
            resilience,
            recovery,
            discipline,
            intellect,
            strength
        }))
    }

    const mobilityHandel = (e) => {
        if(!e.target.value || e.target.value.match(/^\d{0,3}(\-\d{0,3})?$/)){
            setMobility(e.target.value)
        }
    }

    const resilienceHandel = (e) => {
        if(!e.target.value || e.target.value.match(/^\d{0,3}(\-\d{0,3})?$/)){
            setResilience(e.target.value)
        }
    }

    const recoveryHandel = (e) => {
        if(!e.target.value || e.target.value.match(/^\d{0,3}(\-\d{0,3})?$/)){
            setRecovery(e.target.value)
        }
    }

    const disciplineHandel = (e) => {
        if(!e.target.value || e.target.value.match(/^\d{0,3}(\-\d{0,3})?$/)){
            setDiscipline(e.target.value)
        }
    }

    const intellectHandel = (e) => {
        if(!e.target.value || e.target.value.match(/^\d{0,3}(\-\d{0,3})?$/)){
            setIntellect(e.target.value)
        }
    }

    const strengthHandel = (e) => {
        if(!e.target.value || e.target.value.match(/^\d{0,3}(\-\d{0,3})?$/)){
            setStrength(e.target.value)
        }
    }

    const resetHandel = ()=> {

        setMobility("0-0")
        setRecovery("0-0")
        setResilience("0-0")
        setIntellect("0-0")
        setDiscipline("0-0")
        setStrength("0-0")
    }

    return(
        <div className="filters-form--wrapper">
            <h2>Filters</h2>
            <form onSubmit={onSubmitHandel}>
                <label>
                    <p>Mobility</p>
                    <input onChange={mobilityHandel} value={mobility} type="text" name="mobility"/>
                </label>
                <label>
                    <p>Resilience</p>
                    <input onChange={resilienceHandel} value={resilience} type="text" name="resilience"/>
                </label>
                <label>
                    <p>Recovery</p>
                    <input onChange={recoveryHandel} value={recovery} type="text" name="recovery" />
                </label>
                <label>
                    <p>Discipline</p>
                    <input onChange={disciplineHandel} value={discipline} type="text" name="discipline" />
                </label>
                <label>
                    <p>Intellect</p>
                    <input onChange={intellectHandel} value={intellect} type="text" name="intellect" />
                </label>
                <label>
                    <p>Strength</p>
                    <input onChange={strengthHandel} value={strength} type="text" name="strength" />
                </label>

                    <button type="submit">Filtruj</button>

                    <button onClick={resetHandel}>Reset</button>
            </form>
        </div>
    )
}