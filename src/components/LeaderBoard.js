import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserStats from './UserStats'

class LeaderBoard extends Component {
    render() {
        const { users } = this.props
        return (
            <div>
                {users.map((user) => (
                    <UserStats key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}

function mapStateToProps ({ users, authedUser }) {
    const userIds = Object.keys(users)
    const userList = userIds.map((id) => {
        const user = users[id]
        user.answeredQuestions = Object.keys(user.answers).length
        user.createdQuestions = user.questions.length
        user.score = user.answeredQuestions + user.createdQuestions
        return user
    })
    console.log(userList)
    return {
        users: userList.sort((a,b) => b.score - a.score),
        authedUser
    }
}

export default connect(mapStateToProps)(LeaderBoard)
