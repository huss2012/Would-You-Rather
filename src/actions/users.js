import { bindActionCreators } from "../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux"

export const USER_ADD_QUESTION = 'USER_ADD_QUESTION'
export const USER_ADD_ANSWER = 'USER_ADD_ANSWER'
export const RECEIVE_USERS = 'RECEIVE_USERS'




export function receiveUsers(users){
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function userAddQuestion(question){
    return{
        type: USER_ADD_QUESTION,
        question,
    }
}

export function userAddAnswer(qid, authedUser, answer){
    return{
        type: USER_ADD_ANSWER,
        authedUser,
        answer,
        qid,
    }
}
