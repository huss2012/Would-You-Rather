//packages needed: 
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

//components needed:
import Error404 from './Error404'
 



 class QuestionCard extends Component{
    
     render(){
        const linkToResult = "/results/" + this.props.qid
        const linkToQuestion = "/questions/" + this.props.qid
        let isQuestionAnswered
        if(this.props.answers[this.props.qid] === undefined){
          isQuestionAnswered = false
        }
        else{
          isQuestionAnswered = true
        }
        if (!this.props.qid){
          return <Error404/>
        }
         return(
            <div>
                 <img alt={this.props.author} src={this.props.Avatar} style={{width: 111, height: 110, borderRadius: 60}}/>
                  <div><span>{this.props.author}: </span> Asked</div>
                  <div>
                    <h3>Would You Rather!!!</h3>
                  {this.props.questionOptionOne} or {this.props.questionOptionTwo}
                  </div>
                    {isQuestionAnswered ?
                    <Link to={linkToResult}>Show Results</Link>:
                    <Link to={linkToQuestion}>Show Question</Link>
                    }
            </div>
         )
     }
 }


 function mapStateToProps({users, questions, authedUser}, {qid}) { 
     return{
        questionOptionOne: questions[qid].optionOne.text,
        questionOptionTwo: questions[qid].optionTwo.text,
        author: users[questions[qid].author].name,
        Avatar: users[questions[qid].author].avatarURL,
        qid:qid,
        answers: authedUser.id.answers
     }
 }

 export default connect(mapStateToProps)(QuestionCard)

//  `      users,
//          question,
//          author: question.author,
//          optionOneText: question.optionOne.text,
//          optionTwoText: question.optionTwo.text,
//          avatar: users[question.author].avatarURL,
//          authedUser