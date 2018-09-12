import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Question extends Component {
    render() {
        const { question, user } = this.props

        if (question === null) {
            return <p>This question doesn't exist</p>
        }

        const { id, optionOne, optionTwo } = question

        return (
            <Link to={`/questions/${id}`} className='card-deck'>
                <div className='card text-dark border-dark'>
                    <div className='card-header'>
                        <img src={user.avatarURL} alt={user.name} className='card-header-avatar'/>
                        {`${user.name} asks:`}
                    </div>
                    <div className='card-body'>
                        <div className='card-body text-center'>
                            <h5 className='card-title'>Would you rather...</h5>
                        </div>
                        <ul className='list-group text-center'>
                            <li className='list-group-item'>{optionOne.text}</li>
                            <li className='list-group-item'>OR</li>
                            <li className='list-group-item'>{optionTwo.text}</li>
                        </ul>
                    </div>
                </div>
            </Link>
        );
    }
}

function mapStateToProps ({ authedUser, users, questions }, { id }) {
    const question = questions[id]
    const user = users[question.author]
    return {
        authedUser,
        question,
        user,
    }
}

export default connect(mapStateToProps)(Question)
