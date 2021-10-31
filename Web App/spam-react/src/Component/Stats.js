import React from 'react'
import StatGraphs from './StatGraphs'
import Spamstats from './Spamstats'

const Stats = (props) => {
    return (
        <div className={props.class} id='blur2'>
            <Spamstats />
            <StatGraphs />
        </div>
    )
}

export default Stats
