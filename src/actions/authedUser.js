import { _getUser } from '../util/_DATA.js'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'

//This function is for setting the usthed user whene log in:
export function setAuthedUser(id){
    return {
        type: SET_AUTHED_USER, 
        id,
        authenticated: true,
    }
}


export function handleUserLogin(id){
    return(dispatch) => {
        _getUser(id).then((user) => {
            dispatch(setAuthedUser(user))
        })
    }
}
