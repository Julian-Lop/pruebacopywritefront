import axios from 'axios'
import {PORT} from '../../Enviroments/index'
import {
    GET_AND_SEND
} from './types'

export const getAndSend = (text) => {
    return async function(dispatch){
        try {
            let json = await axios(PORT+'iecho?text='+text)
            if(json.data) return dispatch({type: GET_AND_SEND, payload: json.data.text})
        } catch (error) {
            console.log(error)
        }
    }
}