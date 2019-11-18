//packages needed: 
import React, { Component } from 'react'
import { connect } from 'react-redux'


import { handleUserLogin } from '../actions/authedUser'


class Login extends Component{
    state={
    authedID: "",
    }
    handlingTheUserChoose = (value) => {
        this.setState(()=> ({
                authedID: value
        }))
      }
    
      handlingSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(handleUserLogin(this.state.authedID))
      }
    
    render() {
        const { users } = this.props
        return(
           <div>
                <form onSubmit={this.handlingSubmit}>
                    <h1>Welcom to Would You Rather Game!!</h1>
                    <h5>Please Choose an Account...</h5>
                    <span> Log in as </span>
                <select onChange={(e)=> this.handlingTheUserChoose(e.target.value)}>
                    <option value> Choose One... </option>
                    {
                        users && Object.keys(users).map((user)=>
                         <option key={user} value={user.id}>{user}</option>
                    )}
                </select>
                <div>
                    <input type="submit" value="Submit"/>
                </div>
                </form>
           </div>
        )
    }
}


function mapStateToProps({ users, }){
    return{
        users,
    }
}
export default connect(mapStateToProps)(Login)