import {
    RECEIVE_USERS,
    USER_ADD_QUESTION,
    USER_ADD_ANSWER,
} from '../actions/users.js'


export default function users(state = {}, action){
    switch(action.type){
        case RECEIVE_USERS:
            return{
                ...state,
                ...action.users,
            }
        case USER_ADD_ANSWER:
            return{
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    answers:{
                        ...state[action.authedUser].answers,
                        [action.aid]: action.answer,
                    }
                }
            }
        case USER_ADD_QUESTION:
            return{
                ...state,
                [action.question.author]:{
                    ...state[action.question.author],
                    questions: [...state[action.question.author].questions, action.question.id]
                }
            }
        default :
            return state
    }
}
