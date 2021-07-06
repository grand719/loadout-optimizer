export class Item {
    constructor(id, name, type, masterworked, stats) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.masterworked = masterworked || false;

        this.stats = {
            mobility: stats.mobility,
            resilience: stats.resilience,
            recovery: stats.recovery,
            discipline: stats.discipline,
            intellect: stats.intellect,
            strength: stats.trength
        }     
    }
}