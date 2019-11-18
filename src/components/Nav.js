//Packages Needed:
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import {handleUserLogout} from '../actions/authedUser'

class Nav extends Component{
    handlingUserLogout = () => {
		this.props.dispatch(handleUserLogout())
    }
    
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderBoard'>
                            LeaderBoard
                        </NavLink>
                    </li>
                </ul>
                <img alt={this.props.authedUser+' avatar'} src={this.props.authedUserAvatar}  style={{width: 111, height: 110, borderRadius: 60}}/>
                <span>{this.props.authedUser}</span>
                <button onClick={this.handlingUserLogout}>
                         Logout
                </button>
            </div>
        )
    }
}



export default connect()(Nav)