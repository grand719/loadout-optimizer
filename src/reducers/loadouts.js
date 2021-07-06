const loadoutRecuderDefaultState = [];

export default (state = loadoutRecuderDefaultState, action) => {
    switch(action.type) {
        case 'SET_LOADOUTS':
            return action.loadouts
        default:
            return state
    }
}