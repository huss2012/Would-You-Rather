import React from 'react'

import { NavLink } from 'react-router-dom'

export default function Nav () {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to='/' exact> Home </NavLink>
                </li>
                <li>
                    <NavLink to='/new'> New Question</NavLink>
                </li>
                <li>
                    <NavLink to='/LeaderBoard'>Leader Board</NavLink>
                </li>
            </ul>
        </nav>
    )
}