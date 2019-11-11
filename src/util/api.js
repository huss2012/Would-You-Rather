
import {
    _getUsers,
    _getQuestions, 
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA.js'


//Exporting the initial data needed to load the app: 
export function getInitialData(){
    return Promise.all([_getUsers(), _getQuestions()])
    .then(([users, questions]) => ({
        users, 
        questions,
    })
    )
}


export function saveQuestion(info){
    return _saveQuestion(info)
}

export function saveQuestionAnswer(info){
    return _saveQuestionAnswer(info)
}