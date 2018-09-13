import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared";
import LoadingBar from 'react-redux-loading'
import { QuestionPage, Login, NewQuestion, LeaderBoard, Page404, Dashboard, Nav } from '../components'

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
                                        <Route path='/add' component={NewQuestion}/>
                                        <Route path='/leaderboard' component={LeaderBoard}/>
                                        <Route path='/404' component={Page404}/>
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
