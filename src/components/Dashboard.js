import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h3 className='center'>
                    Would You Rather
                </h3>
                <ul>
                    <li><a>Unanswered Questions</a></li>
                    <li><a>Answered Questions</a></li>
                </ul>
                <ul className='card-list'>
                    {this.props.questionIds.map((id) => (
                        <li key={id}>
                            <Question id={id}/>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps ({ questions }) {
    return {
        questionIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)
