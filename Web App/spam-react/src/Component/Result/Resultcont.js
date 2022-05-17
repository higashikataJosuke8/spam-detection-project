import React, { useState, useEffect } from 'react'
import Chart from 'react-google-charts'
import loading from './loading.gif'

const Resultcont = (props) => {
    const [hamPercent, setHamPercent] = useState(50);
    const [advance, setAdvance] = useState({"classification": '', "input_message":'', "model": '',"spam_percent":0});
    useEffect(() => {
        var urlCheck = false;
        const content = props.content;
        const type = props.type;
        console.log(type, content);
        let raw = JSON.stringify({"input_message": content})
        
        var requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: raw
        };
        var path = (type==='Email')?'mail':'sms';
        var url = `https://spamdetekt-api.ml/v1/predict/${path}`;
        fetch(url, requestOptions)
        .then(response => {
            console.log("ok")
            urlCheck = (response.ok) ? true : false;
        })
        .then(response => console.log("ok") )
        .catch(error => console.log(error) );
        if(!urlCheck){
            url = `http://spamdetekt-api.ml/v1/predict/${path}`;
        }
        fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => setAdvance(result))
        .catch(error => console.log('error', error))
      }, [props]);
      console.log(advance);
    const [show, setShow] = useState('');
    const [graph, setGraph] = useState('');
    const showAdvance = () => {
        setShow((show==='') ? 'active': '');
        setGraph((graph==='') ? 'active': '');
        setHamPercent(100-parseFloat(advance.spam_percent));
        console.log(parseFloat(advance.spam_percent))
    };
    const Loading = () => {
        return (
            <>
                <img src={loading} alt='loading' />
            </>
        )
    }
    const ResultIcon = (props) => {
        return (
            <>
                <i className={(props.result==='spam')?'fa fa-exclamation-circle fa-3x result-spam':'fa fa-check-circle fa-3x result-ham'}></i>
            </>
        )
    }
    return (
		<div className="results-cont">
            <div className="result-head">
                <h2>Results</h2>
                <div className='result-desc'>
                    {(advance.classification==='')?<Loading></Loading>:<ResultIcon result={advance.classification}></ResultIcon>}
                    <h4>Your {props.type} content is <b>{(advance.classification==='')?"being processed...":advance.classification}</b></h4>
                </div>
            </div>
            <div className="panel-cont">
                <div className={(advance.classification==='')?'':(advance.classification === 'spam') ? 'result-panel spam' : 'result-panel ham'} id="spamHam">
                    <p id="result-content">{advance.input_message}</p>
                </div>
            </div>
            <div className="btn-cont" id="btns">
                <div className="btn">
                    <a href="/"><button id="scan">Scan again?</button></a>
                    <button id="adv" onClick={showAdvance}>
                    Advance Result<i id="updown" className={"fa fa-chevron-down " + show}></i>
                    </button>
                </div>
            </div>
            <div className="chart-cont" id="advResult">
                <div id="piechart3" className={graph}>
                    <Chart 
                        chartType = 'PieChart'
                        data= {[
                            ["Result", "Percent"],
                            ["Ham", hamPercent],
                            ["Spam", parseFloat(advance.spam_percent)],
                          ]}
                        options = {{
                            title: "Spam Percentage",
                            colors: ['#43da86', '#f2405d'],
                            backgroundColor: 'transparent',
                            pieHole: 0.4,
                            width: '100%',
                            height: '100%',
                            Animation: 'changeHeight 1s linear both'
                          }}
                    /></div>
            </div>
        </div>
    )
}

export default Resultcont