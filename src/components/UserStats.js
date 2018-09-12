import React, { Component } from 'react'

class UserStats extends Component {
    render() {
        const { user } = this.props
        return (
            <div className='card'>
                <div className='card-header'>
                    <img src={user.avatarURL} alt={user.name} className='card-header-avatar'/>
                    {user.name}
                </div>
                <div className='card-body row'>
                    <div className='col col-9'>
                        <ul className='list-group user-stats'>
                            <li className='list-group-item'>
                                Answered questions
                                <span>{user.answeredQuestions}</span>
                            </li>
                            <li className='list-group-item'>
                                Created questions
                                <span>{user.createdQuestions}</span>
                            </li>
                        </ul>
                    </div>
                    <div className='col col-3 user-score'>
                        Score
                        <div>{user.score}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserStats
