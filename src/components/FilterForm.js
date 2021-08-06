import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addFilter} from '../actions/filters'
import { MultiRangeSlider } from './mutli-range-slider/Multi-range-slider'

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

    useEffect(()=>{
        console.log(filters)
    }, [filters])

    const resetHandel = ()=> {

        setMobility("0-200")
        setRecovery("0-200")
        setResilience("0-200")
        setIntellect("0-200")
        setDiscipline("0-200")
        setStrength("0-200")
    }

    return(
        <div className="filters-form--wrapper">
            <h2>Filters</h2>
            <form onSubmit={onSubmitHandel}>
                <label>
                    <p>Mobility</p>
                    <MultiRangeSlider min={0} max={200} onChange={({min, max}) => setMobility(`${min}-${max}`)}/>
                </label>
                <label>
                    <p>Resilience</p>
                    <MultiRangeSlider min={0} max={200} onChange={({min, max}) => setResilience(`${min}-${max}`)}/>
                </label>
                <label>
                    <p>Recovery</p>
                    <MultiRangeSlider min={0} max={200} onChange={({min, max}) => setRecovery(`${min}-${max}`)}/>
                </label>
                <label>
                    <p>Discipline</p>
                    <MultiRangeSlider min={0} max={200} onChange={({min, max}) => setDiscipline(`${min}-${max}`)}/>
                </label>
                <label>
                    <p>Intellect</p>
                    <MultiRangeSlider min={0} max={200} onChange={({min, max}) => setIntellect(`${min}-${max}`)}/>
                </label>
                <label>
                    <p>Strength</p>
                    <MultiRangeSlider min={0} max={200} onChange={({min, max}) => setStrength(`${min}-${max}`)}/>
                </label>

                    <button type="submit">Filtruj</button>

                    <button onClick={resetHandel}>Reset</button>
            </form>
        </div>
    )
}