import React , { Component }from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard.js'
import Nav from './Nav.js'
import Login from './Login'

//Components:


class App extends Component{
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  render(){
    return(
        <Router>
          {this.props.login === true ?
            <Login />
          :
            <div>
              <Route to='/' exact component={Home}/>
              <Route to='/new' exact component={NewQuestion}/>
              <Route to='/leaderBoard' exact component={LeaderBoard}/>
              <Route to='/' exact component={Home}/>
            </div>
          }
        </Router>
    )
  }
}

function mapStateToProps({  authedUser }) {
  return{
    login: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
