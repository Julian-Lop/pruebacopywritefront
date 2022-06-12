import {
    GET_AND_SEND
} from '../Actions/types'


const initialState = {
    texts : []
}

function rootReducer(state= initialState, {type, payload}){
    switch(type){
        case GET_AND_SEND:
            return{
                ...state,
                texts : [...state.texts, payload]
            }
        default:
            return state   
    }
}

export default rootReducer