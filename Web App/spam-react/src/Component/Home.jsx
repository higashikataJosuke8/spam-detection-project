import React, { useState } from 'react'
import Inputs from './Inputs';
import Stats from './Stats';

const Home = () => {
    const [button, setButton] = useState('inactive');
    const [popup, setPopup] = useState('active');
    const [agree, setAgree] = useState(true);
    const enableSubmit = () => {
      if(agree){
        setButton('active');
        setAgree(false)
      }else{
        setButton('inactive');
        setAgree(true)
      }
    };
    const closePopup = () => {
      setPopup('')
    };
    return (
        <> 
            <div id='popup' className={popup}>
            <h1>Disclaimer</h1>
            <h4>Please note that the data you will be submitting are for website purposes only.  We will not be liable for any loss of data with the use of this website. Any information you place is strictly at your own risk.</h4>
            <label htmlFor="agree" className="agree-cont">I Agree
                <input type="checkbox" name="" id="agree" onClick={enableSubmit}/>
                <span className="checkAgree"></span>
            </label>
            <br/>
            <input type="submit" value="Confirm" onClick={closePopup} id="agreeBtn" disabled={agree} className={button}/>
            </div>
            <Inputs class={'inputs '+popup} />
            <Stats class={'spam '+popup} />
        </>
    )
}

export default Home
