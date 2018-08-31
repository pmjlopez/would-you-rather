import React from 'react'

const Option = (props) => {
    const { text, votes, total, authedUser } = props
    const numTotal = total.length
    const numVotes = votes.length
    const percent = numTotal > 0 ? Math.floor(numVotes / numTotal * 100) : 0
    return (
        <div>
            {votes.includes(authedUser) && (
                <p>Your Vote</p>
            )}
            <p>{text}</p>
            <p>{percent}%</p>
            <p>{votes.length} of {total.length}</p>
        </div>
    )
}

export default Option