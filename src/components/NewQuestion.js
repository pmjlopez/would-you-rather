import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from "../actions/questions"

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: ''
    }
    handleChangeText = (e) => {
        const text = e.target.value
        const option = e.target.name
        console.log('Option/Text', option, text)
        this.setState(() => ({
            [option]: text
        }))
    }
    handleAddQuestion = (e) => {
        e.preventDefault()
        const { dispatch, history } = this.props
        const { optionOneText, optionTwoText } = this.state
        dispatch(handleAddQuestion(
            optionOneText,
            optionTwoText
        ))
        history.push('/')
    }
    render() {
        return (
            <form className='card' onSubmit={this.handleAddQuestion}>
                <div className='card-header'>
                    Create New Question
                </div>
                <div className='card-body'>
                    <p className='card-text'>Complete the question:</p>
                    <h5 className='card-title'>Would you rather...</h5>
                    <input
                        className='form-control'
                        type='text'
                        name='optionOneText'
                        onChange={this.handleChangeText}
                        placeholder='Enter Option One Text Here'
                    />
                    <div className='card-text text-center'>OR</div>
                    <input
                        className='form-control'
                        type='text'
                        name='optionTwoText'
                        onChange={this.handleChangeText}
                        placeholder='Enter Option Two Text Here'
                    />
                </div>
                <div className='card-footer text-center'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        );
    }
}

function mapStateToProps ({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)
