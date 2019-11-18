
import { _getUser } from '../util/_DATA'


export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'

//This function is for setting the usthed user whene log in:
export function setAuthedUser(id){
    return {
        type: SET_AUTHED_USER, 
        authenticated: true,
        id,
    }
}


export function removeAuthedUser(){
    return{
        type: REMOVE_AUTHED_USER,
        authenticated: false,
        id: '',
    }
}

export let handleUserLogin = (id) => {
    return (dispatch) => {
        _getUser(id).then((user) => {
            dispatch(setAuthedUser(user))
        })
    }
}

export let handleUserLogout = () => {
    return (dispatch) => {
        dispatch(removeAuthedUser());
        window.location.href = '/';
    }
}