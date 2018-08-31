import React, { Component } from 'react'

class Nav extends Component {
    render() {
        return (
            <div>
                <a href='/'>Home</a>
                <a href='/new'>New Question</a>
                <a href='/leader-board'>Leader Board</a>
            </div>
        );
    }
}

export default Nav