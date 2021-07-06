const itemStatsReducerDefaultState = {
    stats: {type: "none", mobility:0, resilience:0, recovery:0, discipline:0, intellect:0, strength:0},
    options: {top:0, left:0}
}

export default (state = itemStatsReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_ITEMSTATS':
            return {...action}

        default:
            return state
    }
}