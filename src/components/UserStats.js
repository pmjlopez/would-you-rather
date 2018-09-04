import React, { Component } from 'react'

class UserStats extends Component {
    render() {
        const { user } = this.props
        return (
            <div className='card'>
                <div className='card-body'>
                    <img src={user.avatarURL} alt={user.name} className='card-img'/>
                    <h5 className='card-title'>{user.name}</h5>
                    <ul>
                        <li>
                            Answered questions {user.answeredQuestions}
                        </li>
                        <li>Created questions {user.createdQuestions}</li>
                    </ul>
                    <p>Score {user.score}</p>
                </div>
            </div>
        );
    }
}

export default UserStats