const initialState = {
    all: [],
    hours: [],
    nodes: [],
    node: []
}

function rootReducer( state = initialState, action ){
    switch(action.type){
        case 'GET_ALL':
            return {
                ...state,
                all: action.payload
            }
        case 'GET_HOURS':
            return {
                ...state,
                hours: action.payload
            }
        case 'GET_NODES':
            return {
                ...state,
                nodes: action.payload
            }
        case 'GET_NODE':
            return {
                ...state,
                node: action.payload
            }    
        default:
            return state;
    }
}

export default rootReducer;