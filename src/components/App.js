import React , { Component }from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'


import Home from './Home'
import Nav from './Nav.js'
import Login from './Login'
import LeaderBoard from './LeaderBoard.js'
import NewQuestion from './NewQuestion.js'
import QuestionAnswers from './QuestionAnswers'
import QuestionResults from './QuestionResults'
import Error  from './Error404'





class App extends Component{
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  render(){
    return(
      <Router>
      {!this.props.userID
            ? <Login/> 
            : <div style={{width:"100%"}}>
                <Nav authedUser={this.props.authedUserName} authedUserAvatar={this.props.authedUserPhoto}/>
                <Route path='/' exact component={Home} />
                <Route path='/leaderBoard' component={LeaderBoard} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/questions' component={QuestionAnswers} />
                <Route path='/results' component={QuestionResults} />
                <Route path='/questions/Error' component={Error}/>
              </div>
      }
      </Router>
    )
  }
}

function mapStateToProps({  authedUser }) {
  return {
    userID: authedUser !== null,
    authedUserName: authedUser ? authedUser.id.name : '',
    authedUserPhoto: authedUser ? authedUser.id.avatarURL : '',
  }
}

export default connect(mapStateToProps)(App)
