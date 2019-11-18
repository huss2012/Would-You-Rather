 import React, { Component } from 'react'
 import { connect } from 'react-redux'

 const marks = (user) => {
     return (Object.keys(user.answers).length + user.questions.length)
 }

 class LeaderBoard extends Component {
     render(){
         const listOfUsers = Object.keys(this.props.users).map((id) => this.props.users[id]).sort((userOne, userTwo) => marks(userTwo) - marks(userOne))
         return(
             <div>
                 <ul>
                     {
                         listOfUsers.map((user) => {
                            const { avatarURL, id, name, } = user
                         return(
                             <li key={id}>
                                  <img alt={name} src={avatarURL} style={{width: 100, height: 110, borderRadius: 50}} />
                                  <div>{name}</div>
                                  <div> TOTAL SOCRE: {marks(user)} </div>
                             </li>
                         )
                     }
                            
                     )}
                 </ul>
             </div>
         )
     }
 }

 function mapStateToProps({ users }){
     return{
         users
     }
 }
 export default connect(mapStateToProps)(LeaderBoard)