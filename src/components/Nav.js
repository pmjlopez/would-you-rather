import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { unsetAuthedUser } from "../actions/authedUser"

class Nav extends Component {
    handleLogout = (e) => {
        const { dispatch } = this.props
        dispatch(unsetAuthedUser())
    }
    render() {
        const { user } = this.props
        return (
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-brand" href="#">
                    Hello, {user.name}
                    <img src={user.avatarURL} width="30" height="30"
                         className="d-inline-block align-top" alt={user.name}/>
                </span>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/'>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/add'>New Question</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/leaderboard'>Leader Board</NavLink>
                        </li>
                        <li className='nav-item'>
                            <a
                                className='nav-link'
                                onClick={this.handleLogout}
                            >
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps ({users, authedUser}) {
    const user = users[authedUser]
    return {
        user
    }
}

export default connect(mapStateToProps)(Nav)
