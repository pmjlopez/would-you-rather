import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from "../actions/authedUser"

class Login extends Component {
    handleChangeUser = (e) => {
        const { dispatch } = this.props
        const id = e.target.value
        dispatch(setAuthedUser(id))
    }
    render() {
        const { userIds, users } = this.props
        return (
            <div className='container text-center'>
                <h5>Login</h5>
                <select onChange={this.handleChangeUser}>
                    <option value=''>Select User</option>
                    {userIds.map((id) => (
                        <option key={id} value={id}>{users[id].name}</option>
                    ))}
                </select>
            </div>
        );
    }
}

function mapStateToProps ({users}) {
    return {
        userIds: Object.keys(users),
        users
    }
}

export default connect(mapStateToProps)(Login)