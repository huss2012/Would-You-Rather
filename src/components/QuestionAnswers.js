import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAnswerQuestion } from '../actions/shared'


import Error404 from './Error404'


class QuestionAnswers extends Component{
    state={
        userOption: '',
        answerIsSubmitted: false,
    }

    handleOptionChange = (e) => {
        this.setState({
            userOption: e.target.value
        })
    }

    handleSubmit = (e,qid) => {
        e.preventDefault();
        this.props.dispatch(handleAnswerQuestion(qid,this.state.userOption,this.props.authedUser.id.id))
        this.setState({
              userOption:'',
              answerIsSubmitted: true
          })
    
    }
    render(){
		const splitPath = this.props.location.pathname.split('/')
		const qid = splitPath[2]
		const author = this.props.users[this.props.questions[qid].author].name
		const Avatar = this.props.users[this.props.questions[qid].author].avatarURL
		const timestamp = this.props.questions[qid].timestamp
		if (this.props.questions[qid] === undefined){
		    return <Error404/>
		}
		if (this.state.answerIsSubmitted === true) {
            return <Redirect to={`/results/${qid}`}/>;
        }
        return(
            <div>
                <img alt={author} src={Avatar} style={{width: 111, height: 110, borderRadius: 60}}/>
                <div>
                    <h5>Asked By:{author}</h5>
                </div>
			    <div> 
                    <span> 
                        Posted at: {timestamp} 
                    </span> 
                </div>
                <div>
                
                    <input type="radio" value='optionOne' name="answer" onChange={this.handleOptionChange}/>
                    <label>1-</label> {this.props.questions[qid].optionOne.text}
				</div>
				<label></label>
				<div>
					<input type="radio" value='optionTwo' name="answer" onChange={this.handleOptionChange}/>
                    <label>2-</label>{this.props.questions[qid].optionTwo.text}
				</div>
                <button onClick={(event) => this.handleSubmit(event,qid)}> Submit Answer</button>

            </div>
            
        )
    }
}

function mapStateToProps({ questions, users, authedUser}, qid){
    return {
    	answers: authedUser.id.answers,
    	questions,
    	qid,
       	authedUser,
       	users
    }
}

export default connect(mapStateToProps)(QuestionAnswers)