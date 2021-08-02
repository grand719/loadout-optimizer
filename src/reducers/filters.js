const filterDefaultState = {
    mobility: "0-0",
    resilience: "0-0",
    recovery: "0-0",
    discipline: "0-0",
    intellect: "0-0",
    strength: "0-0"
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