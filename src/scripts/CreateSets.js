import {Set} from './Set.js'
import {SortItems} from './SortItems.js'

class CreateSets extends SortItems{
    constructor() {
        super()
        this.sets = [];
    }


    showSets = (arrayOfItems) => {
        return this.createSetsVarations(this.sortItems(arrayOfItems))
    }

    createSetsVarations = ({typeHelmet, typeGauntlets, typeChest, typeLegs, typeCloak}={}) => {

        if(typeHelmet.length <= 0 || typeGauntlets.length <= 0 ||
             typeChest.length <= 0 || typeLegs.length <= 0 || typeCloak.length <= 0) {
           throw new Error("Not enought items to create any lodouts")
        }
        
        else {
            this.sets = []
            typeHelmet.forEach(helmet => {
                typeGauntlets.forEach(gauntlets => {
                    typeChest.forEach(chest => {
                        typeLegs.forEach(legs => {
                            typeCloak.forEach(cloak => {
                                const newSet = new Set(helmet, gauntlets, chest, legs, cloak)
                                this.sets.push(newSet)
                            })
                        })
                    })
                })
            });

            

            return this.sets;
        }
    }   

}

const createSets = new CreateSets();

export default createSets;