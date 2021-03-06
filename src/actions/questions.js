import {  _getQuestions } from '../util/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

//this function is for the initial data in the app: 
export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question,
    }
}

export function answerQuestion(qid, authedUser, answer){
    return{
        type: ANSWER_QUESTION,
        qid,
        authedUser,
        answer,
    }
}

export function handleGetQuestions(){
    return dispatch => {(
        _getQuestions().then((questions) => dispatch(receiveQuestions(questions)))
    )}
}
