import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/shared.js'

import { Form, Button, Container } from 'react-bootstrap'


class NewQuestion extends Component{
    state={
        optionOne: '',
        optionTwo: '',
        submitted: false,
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { authedUser, dispatch } = this.props
        const { optionOne, optionTwo } = this.state
        dispatch(handleAddQuestion(optionOne, optionTwo, authedUser.id.id))
        this.setState({submitted: true})
    }

    handleChange= (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render(){
        if(this.state.submitted){
            return <Redirect to='/' />
        }
        return(
            <Container>
                <h1>Would You Rather!</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId='addQuestion'>
                        <label>Option 1: </label>
                        <Form.Control
                            name='optionOne'
                            defaultValue={this.state.optionOne}
                            onChange={this.handleChange}
                            placeholder='First Option' 
                        />
                        <label>Option 2: </label>
                        <Form.Control
                            name='optionTwo'
                            defaultValue={this.state.optionTwo}
                            onChange={this.handleChange}
                            placeholder='Second Option' 
                        />
                        <Button type='submit' className='button'>Submit</Button>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}

function mapStateToProps({ authedUser }){
    return{
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)