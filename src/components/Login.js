import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleUserLogin } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component{
    handleChange = (e) => {
        e.preventDefault()
        dispatchEvent(handleUserLogin(e.target.value))
        
    }
    render() {
        if(this.props.authedUser !== null){
            return <Redirect to='/' />
        }
        return(
            <div>
                <h3>Welcome To The Would You Rather Game!</h3>
                <form>
                    <p>Log in as</p>
                    <select>
                        {
                            //To iterate through the users in the _DATA to put them in the dropdown select:
                            this.props.users.map((user) => (
                                    <option key={user} value={user} onChange={this.handleChange}>
                                        {user}
                                    </option>
                            ))
                        }
                    </select>
                    <button type='submit'>log in</button>
                    
                </form>
            </div>
        )
    }
}

//bring the users from the store:
function mapStateToProps({users, authedUser}){
    return{
        users: Object.keys(users),
        authedUser: authedUser,
    }
}
export default connect(mapStateToProps)(Login)