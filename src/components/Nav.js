import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { unsetAuthedUser } from "../actions/authedUser"

class Nav extends Component {
    state = {
        showMenu: false
    }
    handleLogout = (e) => {
        const { dispatch } = this.props
        dispatch(unsetAuthedUser())
    }
    handleNavClick = (e) => {
        this.setState((state) => ({
            showMenu: state.showMenu ? false : true
        }))
    }
    render() {
        const { user } = this.props
        const { showMenu } = this.state
        return (
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-brand" href="#">
                    Hello, {user.name}
                    <img src={user.avatarURL} width="30" height="30"
                         className="d-inline-block align-top" alt={user.name}/>
                </span>
                <div className={`collapse navbar-collapse ${showMenu}`} id="navbarToggler">
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <NavLink onClick={this.handleNavClick} className='nav-link' to='/'>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink onClick={this.handleNavClick} className='nav-link' to='/add'>New Question</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink onClick={this.handleNavClick} className='nav-link' to='/leaderboard'>Leader Board</NavLink>
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
