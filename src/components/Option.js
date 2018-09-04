import React from 'react'

const Option = (props) => {
    const { text, votes, total, authedUser } = props
    const numTotal = total.length
    const numVotes = votes.length
    const percent = numTotal > 0 ? Math.floor(numVotes / numTotal * 100) : 0
    return (
        <div className='text-center'>
            <p className='card-text'>
                {text}
                {votes.includes(authedUser) && (
                    <span className='badge badge-primary'>Your Vote</span>
                )}
            </p>
            <div className='progress'>
                <div
                    className='progress-bar progress-bar-animated progress-bar-striped'
                    role='progressbar'
                    style={{width: `${percent}%`}}
                    aria-valuenow={percent}
                    aria-valuemin='0'
                    aria-valuemax='100'
                >{percent}%</div>
            </div>
            <p className='card-text'>{votes.length} of {total.length}</p>
        </div>
    )
}

export default Option