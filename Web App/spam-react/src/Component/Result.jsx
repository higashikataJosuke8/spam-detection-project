import React from 'react'
import Logo from './Logo'
import Spamstats from './Spamstats'
import Resultcont from './Resultcont'

const Result = (props) => {
    return (
        <>
            <div className='inputs'>
                <Logo />
                <Resultcont type={props.type} content={props.content}/>
            </div>
            <div className='spam'>
                <Spamstats />
            </div>
        </>
    )
}

export default Result
