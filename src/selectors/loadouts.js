const statSelector = (requremants, item) => {
    let trueCount = 0;
    
    for(const statsName in requremants){
        
        let splitedStats = requremants[statsName].split("-")
        
        if(item.stats[statsName] >= +splitedStats[0] && item.stats[statsName] <= +splitedStats[1]){
         trueCount ++   
        }
    }

    if(trueCount === Object.keys(requremants).length) {
            return true
        }else{
            return false
        }
    
    } 

export default (
    loadouts, querry
    ) => {
       return loadouts.filter((loadout)=>{
            if(statSelector(querry, loadout) ){
                return loadout
            }
        })
}