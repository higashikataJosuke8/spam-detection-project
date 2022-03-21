import React, { useState, useEffect } from 'react'
import Inputs from './Inputs';
import Stats from './Stats';
import Cookies from 'js-cookie';

const Home = (props) => {
    const [button, setButton] = useState('inactive');
    const [popup, setPopup] = useState('inactive');
    const [agree, setAgree] = useState(true);

    useEffect(()=>{
      if(Cookies.get('userAgree')){
        setPopup('inactive');
      }else{
        setPopup('active');
      }
    }, []);

    const enableSubmit = () => {
      if(agree){
        setButton('active');
        setAgree(false)
      }else{
        setButton('inactive');
        setAgree(true)
      }
    };
    const changeType = (e) => {
      props.changeType(e);
    }
    const changeContent = (e) => {
      props.changeContent(e);
    }
    const closePopup = () => {
      setPopup('');
      if(!agree){
        Cookies.set('userAgree','agreeTrue', {expires: 1});
      }
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
            <Inputs class={'inputs '+popup} type = {props.type} content={props.content} changeType={changeType} changeContent={changeContent}/>
            <Stats class={'spam '+popup} />
        </>
    )
}

export default Home
