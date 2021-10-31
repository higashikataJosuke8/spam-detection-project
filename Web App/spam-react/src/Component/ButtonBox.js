import React, { useState } from 'react'
import './ButtonBox.css'


const ButtonBox = () => {
    const [styleemail, setStyleEmail] = useState('email active');
    const [stylesms, setStyleSMS] = useState('sms inactive');
    const openEmail = () => {
        setStyleEmail('email active');
        setStyleSMS('sms inactive');
    }
    const openSMS = () => {
        setStyleEmail('email inactive');
        setStyleSMS('sms active');
    }
    return (
        <div className="btn-box">
            <div className={styleemail} id="btn1label">
                <input type="radio" name="type" id="btn1" onChange={openEmail} value="Email" checked/>
                <label htmlFor="btn1">Email</label>
            </div>
            <div className={stylesms} id="btn2label">
                <input type="radio" name="type" id="btn2" onChange={openSMS} value="SMS" />
                <label htmlFor="btn2">  SMS  </label>
            </div>
        </div>
    )
}
export default ButtonBox
