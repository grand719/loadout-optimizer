export class SortItems {
    constructor() {

        this.items = []

        this.typeHelmet = []
        this.typeGauntlets = []
        this.typeChest = []
        this.typeLegs = []
        this.typeCloak = []
    }


    sortItems = (items) => {

        this.typeHelmet = []
        this.typeGauntlets = []
        this.typeChest = []
        this.typeLegs = []
        this.typeCloak = []

        items.forEach((item) => {
            item.type === 'helmet' && this.typeHelmet.push(item)
            item.type === 'gauntlets' && this.typeGauntlets.push(item)
            item.type === 'chest' && this.typeChest.push(item)
            item.type === 'legs' && this.typeLegs.push(item)
            item.type === 'classItem' && this.typeCloak.push(item)
        })

        return {
            typeHelmet: this.typeHelmet, 
            typeGauntlets: this.typeGauntlets,
            typeChest: this.typeChest,
            typeLegs: this.typeLegs,
            typeCloak: this.typeCloak
        }
    }
}