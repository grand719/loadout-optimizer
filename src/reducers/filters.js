const filterDefaultState = {
    mobility: "0-200",
    resilience: "0-200",
    recovery: "0-200",
    discipline: "0-200",
    intellect: "0-200",
    strength: "0-200"
}

export default  (state = filterDefaultState, action)=>{
    switch(action.type){
        case "ADD_FILTER":
          return  {
                ...state,
                ...action.filter
            }
        case "RESET_TO_DEFAULT":
            return  filterDefaultState
        default:
            return state

    }

}