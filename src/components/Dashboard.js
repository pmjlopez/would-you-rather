import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Question } from '../components'

const UNANSWERED_QUESTIONS = 'UNANSWERED_QUESTIONS'
const ANSWERED_QUESTIONS = 'ANSWERED_QUESTIONS'

class Dashboard extends Component {
    state = {
        questionIds: [],
        tab: ''
    }
    componentDidMount () {
        this.setState(() => ({
            tab: UNANSWERED_QUESTIONS
        }))
    }
    componentDidUpdate (prevProps,prevState) {
        if (this.state.tab !== prevState.tab
            || this.props.questionIds !== prevProps.questionIds
            || this.props.user.answers !== prevProps.user.answers
        ) {
            this.handleFilterQuestions(this.state.tab)
        }
    }
    getFilteredQuestions = (selectedTab) => {
        const { user, questionIds } = this.props
        const answerIds = Object.keys(user.answers)
        const qIds = selectedTab === UNANSWERED_QUESTIONS
            ? questionIds.filter((id) => !answerIds.includes(id))
            : questionIds.filter((id) => answerIds.includes(id))
        return qIds
    }
    handleFilterQuestions = (selectedTab) => {
        console.log('Selected Tab', selectedTab)
        const qIds = this.getFilteredQuestions(selectedTab)
        this.setState((prevState) => ({
            questionIds: qIds,
            tab: selectedTab
        }))
    }
    render() {
        return (
            <div className='container'>
                <h3 className='center'>
                    Would You Rather
                </h3>
                <ul className='nav nav-tabs'>
                    <li className='nav-item'>
                        <button
                            onClick={() => this.handleFilterQuestions(UNANSWERED_QUESTIONS)}
                            className={`nav-link ${this.state.tab === UNANSWERED_QUESTIONS ? 'active' : ''}`}
                        >
                            Unanswered Questions
                        </button>
                    </li>
                    <li className='nav-item'>
                        <button
                            onClick={() => this.handleFilterQuestions(ANSWERED_QUESTIONS)}
                            className={`nav-link ${this.state.tab === ANSWERED_QUESTIONS ? 'active' : ''}`}
                        >
                            Answered Questions
                        </button>
                    </li>
                </ul>
                <div className='row'>
                    {this.state.questionIds.map((id) => (
                        <div key={id} className='col-lg-4'>
                            <Question id={id}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

function mapStateToProps ({ questions, users, authedUser }) {
    return {
        user: users[authedUser],
        questionIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    }
}

export default connect(mapStateToProps)(Dashboard)
