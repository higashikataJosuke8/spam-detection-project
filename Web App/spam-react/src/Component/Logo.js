import React from 'react'
import Logopic from './logo-348ccc.png'

const Logo = () => {
    return (
        <div className="logo">
            <img src={Logopic} alt=''/>
            <div className="logo-name">
                <h1>SPAM DETECTION</h1>
                <h5><i>Detecting Spam Messages using Machine Learning. </i></h5>
            </div>
        </div>
    )
}

export default Logo
