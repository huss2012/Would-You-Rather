import {
    SET_AUTHED_USER,
    REMOVE_AUTHED_USER,
} from '../actions/authedUser.js'




export default function authedUser(state = null, action){
    switch(action.type){
        case SET_AUTHED_USER:
            return{
                ...state,
                id: action.id,
            }
        case REMOVE_AUTHED_USER:
            return{
                ...state,
                authticated: action.authticated,
                id: action.id
            }
        default: 
            return state
    }
}