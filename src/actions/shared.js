//Data needed:
import { getInitialData } from '../util/api.js'

import {
    _saveQuestion,
    _saveQuestionAnswer,
} from '../util/_DATA'

//Actions Needed: 
import { 
    receiveUsers,
    userAddQuestion,
    userAddAnswer,
 } from '../actions/users'

import { 
    receiveQuestions,
    answerQuestion,
    addQuestion,
} from '../actions/questions'



//This function is for handling the inital data when the app loads:
export function handleInitialData(){
    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
        })
    }
}


export function handleAnswerQuestion(qid, answer, authedUser){
    return dispatch => {
        _saveQuestionAnswer({
            authedUser, qid, answer
        }).then(() => {
            dispatch(answerQuestion(qid, authedUser, answer))
            dispatch(userAddAnswer(qid, authedUser, answer))
        })
    }
}

export function handleAddQuestion(optionOne, optionTwo, authedUser, callback){
    return dispatch => {
        _saveQuestion({
            optionOneText:optionOne,
            optionTwoText:optionTwo,
            author:authedUser,
        }).then((question) => {
            dispatch(userAddQuestion(question))
            dispatch(addQuestion(question))
        }).then(callback)
    }
}