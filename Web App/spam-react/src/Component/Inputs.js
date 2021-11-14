import React, { useState } from 'react'
import InputField from './InputField'
import Logo from './Logo'
import ButtonBox from './ButtonBox'
import { Link, withRouter } from 'react-router-dom'

const Inputs = (props) => {
    const [confirm, setConfirm] = useState('confirmation');
    const [type, setType] = useState(props.type);
    const [content, setContent] = useState(props.content);
    const openConfirm = () => {
        setConfirm('confirmation active');
    }
    const closeConfirm = () => {
        setConfirm('confirmation');
        props.changeContent(content);
        props.changeType(type);
    };
    const changeType = (e) => {
        setType(e.target.value);
    }
    const changeContent = (e) => {
        setContent(e.target.value);
    }
    return (
        <div className={props.class} id="blur">
            <Logo />
            <div className="tabs">
                <div className="input-box">
                    <form method="GET" action='/result'>
                        <ButtonBox changeType={changeType} />
                        <InputField changeContent={changeContent} />
                        <p> <i>Disclaimer: </i>
                            Please note that the data you will be submitting are for website purposes only.  
                            We will not be liable for any loss of data with the use of this website. 
                            Any information you place is strictly at your own risk.
                        </p>
                        <div className="proceed-btn">
                            <div id="proceed" onClick={openConfirm}>Proceed</div>
                        </div>
                        <div className= {confirm} id="confirmation">
                            <h5>Are you sure you want to submit the content of your message?</h5>
                            <div className="confirm-cont">
                                <div className="confirm cancel" onClick={closeConfirm}>Cancel</div>
                                <Link to="/result" className='continue-cont'><input className="confirm continue" type="submit" value="Continue" onClick={closeConfirm} /></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Inputs)
