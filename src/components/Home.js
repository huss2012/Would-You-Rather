 //Package Needed:
 import React, { Component } from 'react'
 import { connect } from 'react-redux'
 import { Tabs, Tab } from 'react-bootstrap'

 //component Needed:
 import QuestionCard from './QuestionCard'



 class Home extends Component{
     render(){
         console.log('The authedUser Id is : ', this.props)
        
         return(
            <Tabs defaultActiveKey={1} id="questionsTab">
                <Tab eventKey={1} title="Unanswered-Questions">
                    <ul>
                        {this.props.unanswered.map((id)=>(
                            <li key={id}>
                            <QuestionCard qid={id}/>
                            </li>
                        ))}
                    </ul>
                </Tab>
                <Tab eventKey={2} title="Answered-Questions">
                    <ul>
                        {this.props.answered.map((id)=>(
                         <li key={id}>
                        <QuestionCard qid={id}/>
                        </li>
                     ))}
                    </ul>
                </Tab>
          </Tabs>
         )
     }
 }

 //Q) what Data Do We need from the store?
 const mapStateToProps = ({ questions, authedUser }) => {
    const listOfQuestions = Object.keys(questions)

    const listofOrderedQuestions = listOfQuestions.sort((a,b)=>questions[b].timestamp - questions[a].timestamp)
    const questionsAnsweredByAutheUser = (authedUser.id !== undefined) ? Object.keys(authedUser.id.answers):[]
    return{
      answered: listofOrderedQuestions.filter((question) => {
        return questionsAnsweredByAutheUser.includes(question) ? question : null
        }),
      unanswered: listofOrderedQuestions.filter((question) => {
        return questionsAnsweredByAutheUser.includes(question) ? null : question
      })
    }
  }

 export default connect(mapStateToProps)(Home)