import React, { useState, useEffect } from 'react'
import Chart from 'react-google-charts'

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

    return (
		<div className="results-cont">
            <div className="result-head">
                <h2>Results</h2>
                <h4>{advance.type}</h4>
            </div>
            <div className="panel-cont">
                <div className={(advance.result === 'Spam') ? 'result-panel spam' : 'result-panel ham'} id="spamHam">
                    <p id="result-type">{advance.result} {advance.type}</p>
                    <p id="result-content">{advance.content}</p>
                </div>
            </div>
            <div className="btn-cont" id="btns">
                <div className="btn">
                    <button id="adv" onClick={showAdvance}>
                    Advance Results<i id="updown" className={"fa fa-chevron-down " + show}></i>
                    </button>
                    <a href="/"><button id="scan">Scan again?</button></a>
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