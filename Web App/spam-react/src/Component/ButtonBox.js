import React, { useState } from 'react'
import './ButtonBox.css'


const ButtonBox = (props) => {
    const [styleemail, setStyleEmail] = useState('email active');
    const [stylesms, setStyleSMS] = useState('sms inactive');
    const [check, setCheck] = useState(true);
    const openEmail = (e) => {
        setStyleEmail('email active');
        setStyleSMS('sms inactive');
        setCheck(!check);
        props.changeType(e);
    }
    const openSMS = (e) => {
        setStyleEmail('email inactive');
        setStyleSMS('sms active');
        setCheck(!check);
        props.changeType(e);
    }
    return (
        <div className="btn-box">
            <div className={styleemail} id="btn1label">
                <input type="radio" name="type" id="btn1" onChange={openEmail} value="Email" checked={check}/>
                <label htmlFor="btn1">Email</label>
            </div>
            <div className={stylesms} id="btn2label">
                <input type="radio" name="type" id="btn2" onChange={openSMS} value="SMS" checked={!check}/>
                <label htmlFor="btn2">  SMS  </label>
            </div>
        </div>
    )
}
export default ButtonBox
