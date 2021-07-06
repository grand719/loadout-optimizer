export class Set {
    constructor(helmet, gauntlets, chest, legs, clasItem) {
        this.helmet = helmet;
        this.gauntlets = gauntlets;
        this.chest = chest;
        this.legs = legs;
        this.classItem = clasItem;
        this.stats = {
            mobility: this.helmet.mobility + this.gauntlets.mobility+ this.chest.mobility + this.legs.mobility + this.classItem.mobility,
            resilience: this.helmet.resilience + this.gauntlets.resilience + this.chest.resilience + this.legs.resilience+ this.classItem.resilience,
            recovery: this.helmet.recovery + this.gauntlets.recovery + this.chest.recovery + this.legs.recovery+ this.classItem.recovery,
            discipline: this.helmet.discipline + this.gauntlets.discipline + this.chest.discipline + this.legs.discipline+ this.classItem.discipline,
            intellect: this.helmet.intellect + this.gauntlets.intellect + this.chest.intellect + this.legs.intellect+ this.classItem.intellect,
            strength: this.helmet.strength + this.gauntlets.strength + this.chest.strength + this.legs.strength+ this.classItem.strength
        };
    }




}