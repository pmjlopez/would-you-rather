import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared";
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
import Login from './Login'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        return (
            <Router>
                <Fragment>
                    {this.props.authedUser && (
                        <Fragment>
                            <Nav/>
                            <LoadingBar/>
                            <div className='container'>
                                {this.props.loading === true
                                    ? null
                                    : <div>
                                        <Route path='/' exact component={Dashboard}/>
                                        <Route path='/questions/:id' component={QuestionPage}/>
                                        <Route path='/new' component={NewQuestion}/>
                                        <Route path='/leader-board' component={LeaderBoard}/>
                                    </div>
                                }
                            </div>
                        </Fragment>
                    )}
                    {!this.props.authedUser && (
                        <Fragment>
                            <LoadingBar/>
                            <Login/>
                        </Fragment>
                    )}
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps ({ authedUser, users, questions }) {
    return {
        loading: authedUser === null,
        authedUser,
    }
}

export default connect(mapStateToProps)(App)
