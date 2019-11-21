import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Error404 from './Error404'


class QuestionResultsCard extends Component{
    totalVotesForEachQuestion = (questions,qid) => {
        let optionOneVotes = questions[qid].optionOne.votes.length
        let optionTwoVotes = questions[qid].optionTwo.votes.length
        return [(optionOneVotes + optionTwoVotes), optionOneVotes, optionTwoVotes]
    }
    
    votesForEachOption = (questions,qid,option) => {
        const optionVotes = (questions[qid])[option].votes.length
        const optionVotesPercentage = (optionVotes/(this.totalVotesForEachQuestion(questions,qid)[0]))*100
        return optionVotesPercentage
    }
    render(){
		const toPath = this.props.location.pathname.split('/')
		const qid = toPath[2]
		const author = this.props.users[this.props.questions[qid].author].name
		const Avatar = this.props.users[this.props.questions[qid].author].avatarURL
		const timestamp = this.props.questions[qid].timestamp


		if (this.props.questions[qid] === undefined){
		    return <Error404/>
		}
		const answerSelectedByUser = this.props.answers[qid]
        return(
			<div>
				<h1>Question Statstics..! </h1>
				<img alt={author} src={Avatar} style={{width: 111, height: 110, borderRadius: 60}}/>
			    <div>Posted by: <span>{author}</span></div>
			    <div> <span>Posted at: {timestamp} </span> </div>
			
			
				<h4>Would You Rather?!!</h4>
				{answerSelectedByUser ==='optionOne'?
				<p>Option One: {this.props.questions[qid].optionOne.text} --> You Choose this Option<br/> 
				Percentage: {this.votesForEachOption(this.props.questions,qid,"optionOne")}%  <br/> 
				Number of votes {this.totalVotesForEachQuestion(this.props.questions,qid)[1]} </p>:
				<p>Option One: {this.props.questions[qid].optionOne.text} <br/> 
				Percentage: {this.votesForEachOption(this.props.questions,qid,"optionOne")}% .<br/> 
				Option One has {this.totalVotesForEachQuestion(this.props.questions,qid)[1]} vote(s).</p>
				}
				{answerSelectedByUser === 'optionTwo'?
				<p >Option Two: {this.props.questions[qid].optionTwo.text} --> You Choose this Option<br/> 
				Percentage: {this.votesForEachOption(this.props.questions,qid,"optionTwo")}% <br/>
				 Number of votes {this.totalVotesForEachQuestion(this.props.questions,qid)[2]} </p>:
				<p>Option Two: {this.props.questions[qid].optionTwo.text} <br/> Percentage: {this.votesForEachOption(this.props.questions,qid,"optionTwo")}% .<br/> 
				Option Two has {this.totalVotesForEachQuestion(this.props.questions,qid)[2]} vote(s). </p>}

				<Link to="/">To Home</Link>
		</div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }, {qid}){
    return {
    	answers: authedUser.id.answers,
    	questions,
    	qid,
       	authedUser,
		users,
    }
}


export default connect(mapStateToProps)(QuestionResultsCard)