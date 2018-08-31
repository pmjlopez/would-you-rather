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
            <Link to={`/questions/${id}`}>
                <div className='card'>
                    <div className='header'>
                        <img src={user.avatarURL} alt={user.name}/>
                        <p>{`${user.name} asks:`}</p>
                    </div>
                    <div className='content'>
                        <p>Would you rather</p>
                        <p>{optionOne.text}</p>
                        <p>OR</p>
                        <p>{optionTwo.text}</p>
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
