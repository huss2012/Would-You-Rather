 import React, { Component } from 'react'
 import { connect } from 'react-redux'
 import { Redirect } from 'react-router-dom'
 import { handleAddQuestion } from '../actions/shared'


 class NewQuestion extends Component{
     state={
         optionOneText: '',
         optionTwoText: '',
         questionSubmitted: false,
     }

     handleSubmitQuestion = (e) => {
         e.preventDefault()
         this.props.dispatch(handleAddQuestion(this.state.optionOneText, this.state.optionTwoText, this.props.authedUser.id.id))
         this.setState({questionSubmitted: true})
     }

     handlingChange= (e) => {
         e.preventDefault()
         this.setState({
             [e.target.name]: e.target.value
         })
     }


     render(){
         if(this.state.questionSubmitted){
             return <Redirect to='/' />
         }
         return(
             <div>
                 <h1>Would You Rather!</h1>
                 <form onSubmit={this.handleSubmitQuestion}>
                         <label>The First Option: </label>
                         <input name='optionOneText'
                             defaultValue={this.state.optionOneText}
                             onChange={this.handlingChange}
                             placeholder='First Option' />
                         <label>The Second Option: </label>
                         <input  name='optionTwoText'
                             defaultValue={this.state.optionTwoText}
                             onChange={this.handlingChange}
                             placeholder='Second Option'/>
                         <button type='submit'>Submit</button>
                 </form>
             </div>
         )
     }
 }

 function mapStateToProps({ authedUser }){
     return{
         authedUser
     }
 }

 export default connect(mapStateToProps)(NewQuestion)