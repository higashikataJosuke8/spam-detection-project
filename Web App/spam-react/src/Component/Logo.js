import React from 'react'
import Logopic from './detekt-logo.png'

const Logo = () => {
    return (
        <div className="logo">
            <img src={Logopic} alt=''/>
            <div className="logo-name">
                <h5><i>Detecting Spam Messages using Machine Learning. </i></h5>
            </div>
        </div>
    )
}

export default Logo
