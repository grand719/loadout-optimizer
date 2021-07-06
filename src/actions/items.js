import {v4 as uuid} from 'uuid'

export const addItem = ({
    type= '',
    masterWork = false,
    mobility = 0,
    resilience = 0,
    recovery = 0,
    discipline = 0,
    intellect = 0,
    strength = 0
 }) => ({
    type: "ADD_ITEM",
    item: {
        id: uuid(),
        type,
        masterWork,
        mobility,
        resilience,
        recovery,
        discipline,
        intellect,
        strength
    } 
 })

 export const editItem = (id,{
    masterWork = false,
    mobility = 0,
    resilience = 0,
    recovery = 0,
    discipline = 0,
    intellect = 0,
    strength = 0   
 })=>({
    type: "EDIT_ITEM",
    updates: {
        masterWork,
        mobility,
        resilience,
        recovery,
        discipline,
        intellect,
        strength
    }
 })

 export const removeItem = (id) => ({
    type: "REMOVE_ITEM",
    id
 })

 export const setItems = (items) => ({
     type: "SET_ITEMS",
     items
 })