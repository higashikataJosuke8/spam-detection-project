import React, { useState, useEffect } from 'react'
import Chart from 'react-google-charts'
import loading from './loading.gif'

const Resultcont = (props) => {
    var hamPercent = 50;
    const [advance, setAdvance] = useState({"spamPercent":0, "result": '', 'type': '', 'content': ''});
    useEffect(() => {
        const content = props.content;
        const type = props.type;
        console.log(type, content);
        fetch("/results", {'method': 'POST', 
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({type, content})
    }).then(response => {
          if(response.status === 200){
            return response.json()
          }
        }).then(data => setAdvance(data))
        .catch(error => console.log(error))
      }, [props]);
      console.log(advance);
    var spamPercent = advance.spamPercent;
    hamPercent = 100-spamPercent;
    
    const [show, setShow] = useState('');
    const [graph, setGraph] = useState('');
    const showAdvance = () => {
        setShow((show==='') ? 'active': '');
        setGraph((graph==='') ? 'active': '');
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
                <i className={(props.result==='Spam')?'fa fa-exclamation-circle fa-3x result-spam':'fa fa-check-circle fa-3x result-ham'}></i>
            </>
        )
    }
    return (
		<div className="results-cont">
            <div className="result-head">
                <h2>Results</h2>
                <div className='result-desc'>
                    {(advance.result==='')?<Loading></Loading>:<ResultIcon result={advance.result}></ResultIcon>}
                    <h4>Your {advance.type} content is <b>{(advance.result==='')?"being processed...":advance.result}</b></h4>
                </div>
            </div>
            <div className="panel-cont">
                <div className={(advance.result==='')?'':(advance.result === 'Spam') ? 'result-panel spam' : 'result-panel ham'} id="spamHam">
                    <p id="result-content">{advance.content}</p>
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
                <div id="piechart3" className= {graph}>
                    <Chart 
                        chartType = 'PieChart'
                        data= {[
                            ["Result", "Percent"],
                            ["Ham", hamPercent],
                            ["Spam", spamPercent],
                          ]}
                        options = {{
                            title: "Percentage",
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