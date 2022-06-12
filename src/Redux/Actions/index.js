import axios from 'axios'
import {
    GET_AND_SEND
} from './types'

export const getAndSend = (text) => {
    return async function(dispatch){
        try {
            let json = await axios('http://localhost:3001/iecho?text='+text)
            if(json.data) return dispatch({type: GET_AND_SEND, payload: json.data.text})
        } catch (error) {
            console.log(error)
        }
    }
}