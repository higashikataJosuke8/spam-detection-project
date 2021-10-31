import React from 'react'
import Logo from './Logo'
import Spamstats from './Spamstats'
import Resultcont from './Resultcont'

const Result = () => {
    return (
        <>
            <div className='inputs'>
                <Logo />
                <Resultcont />
            </div>
            <div className='spam'>
                <Spamstats />
            </div>
        </>
    )
}

export default Result
