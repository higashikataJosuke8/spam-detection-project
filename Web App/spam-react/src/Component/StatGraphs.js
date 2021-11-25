import React from 'react'
import Chart from 'react-google-charts'

const StatGraphs = () => {
    return (
        <div className='stats'>
          <div className="graphs">
            
            <div className="Graph" id="chart1">
              <div className="infoChart origin" style={{order: 1}}>
                <h3>Origin of Spam</h3>
                <p><b>Internet junk mail</b> was the name before it was called spam. It was then called spam 
                in 1993 when USENET administrator Richard Depew was responding to a discussion group but
                 he accidentally posted 200 duplicate responses to the board. The first spam activity 
                 was done in 1994 by the infamous duo of Cantor and Siegel. They posted an advertisement 
                 called “Green Card Lottery” which simultaneously distributed to 6,000 newsgroups. 
                 They continued the scheme for a while and made a huge amount of money but it made them 
                 the most despisable individuals on the entire network that time.</p>
              </div>
            </div>
            <div className="Graph" id="chart1">
              <div className="infoChart origin" style={{order: 1}}>
                <h3>How to tell if an email is spam?</h3>
                <p>Here are some tips on how to tell if a message is spam or not.<br/>
                 <ul>
                  <li>
                    &nbsp;<b> •	Sender’s email address</b> -	Many spam emails will disguise like a normal
                  email you typically received. One easy way to know if it’s spam is to 
                  check the email address. A legitimate business email shouldn’t come from a free
                  email service like Yahoo, Hotmail, or Gmail.
                  </li>
                  <li>
                    &nbsp;<b> •	Sender's greeting</b> - If it Is from a legitimate company, they will 
                    address you with your first name because they will have your personal details. Spam 
                    emails will likely begin with a ‘valued customer’, or even just a ‘good morning’
                  </li>
                  <li>
                    &nbsp;<b> •	Sender's information request</b> -	If the email you 
                    received ask for your personal information like for example your bank account, 
                    it is a spam. Personal information is only meant to be given in secured places not 
                    in emails where everyone can get their hands on it.
                  </li>
                  <li>
                    &nbsp;<b> •	Contents</b> -	Most companies will tell you what to do 
                    through emails but most likely will not direct you to where to do it with a link. 
                    Also, check for grammatical errors and spelling errors because it is a good sign 
                    that it’s a spam.
                  </li>
                  <li>
                    &nbsp;<b> •	Images</b> -	Sometimes there are images attached to emails. 
                    Spam emails used poor quality or low resolution images which is a sign. If a company 
                    logo is used, check if it’s the right one or just a knock off.
                  </li>
                 </ul>
                 </p>
              </div>
            </div>
            <div className="Graph">
              <div className="chart icon" style={{order: 1}}>
                <i className="fa fa-exclamation-triangle fa-5x" id="imageEmail" style={{fontSize: "100px"}}></i>
              </div>
              <div className="infoChart icon" style={{order: 2}}>
                <h3>What is Spam?</h3>
                <p>Spam is not just a canned meat that everyone loves. Spam on the internet means unsolicited email. 
                These are emails that people received which they didn’t asked for. Spam emails are used mostly for 
                selling you products and another use is for tricking you into giving your personal information to hack you. </p>
              </div>
            </div>
            <div className="Graph">
              <div className="chart icon" style={{order: 2}}>
                <i className="fa fa-list-ul fa-4x" id="imageEmail" style={{fontSize: "100px"}}></i>
              </div>
              <div className="infoChart icon" style={{order: 1}}>
                <h3>Famous spam terms to avoid:</h3>
                <p>
                  <ul>
                    <li> •	As seen on</li>
                    <li> •	Buy</li>
                    <li> •	Meet Singles</li>
                    <li> •	Score with babes</li>
                    <li> •	Additional income</li>
                    <li> •	Earn extra cash</li>
                    <li> •	Affordable</li>
                    <li> •	Best price</li>
                    <li> •	For just $XXX</li>
                    <li> •	Accept credit cards</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="Graph">
              <div className="chart place-graph" style={{order: 1}}>
                <div id="piechart" className="reps">
                  <Chart 
                    chartType = 'PieChart'
                    data= {[
                      ['Email', 'No. of Emails'],
                      ['Spam',     111],
                      ['Ham',      202],
                      ['SMS',  59],
                      ['Hack', 2],
                      ['Others',    7]
                    ]}
                    options = {{
                      title: 'Email Stats', 
                      backgroundColor: '#fff',
                      slices: {
                        0: {color: '#1A4666'},
                        1: {color: '#276999'},
                        2: {color: '#348ccc'},
                        3: {color: '#3B9EE6'},
                        4: {color: '#42afff'},
                        5: {color: "#A1D7FF"}
                      }
                    }}
                  />
                </div>
              </div>
              <div className="infoChart stat-graph" style={{order: 2}}>
                <h3>Piechart</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Odio ipsam dolores quisquam at architecto perspiciatis obcaecati aspernatur rem, 
                  hic beatae assumenda quod ut sint molestias inventore in ex soluta nostrum!</p>
              </div>
            </div>
            <div className="Graph">
              <div className="chart place-graph" style={{order: 2}}>
                <div id="chart_divbar" className="reps">
                  <Chart 
                    data = {[
                      ['Types', '2010 Spam', '2000 Spam'],
                      ['Email', 8175000, 8008000],
                      ['SMS', 3792000, 3694000],
                      ['Hack', 2695000, 2896000],
                      ['MEME', 2099000, 1953000],
                      ['Others', 1526000, 1517000]
                    ]}
                    chartType = 'BarChart'
                    options ={{
                    title: 'No. Spam Emails',
                    chartArea: {width: '50%'},
                    hAxis: {
                      title: 'Total Population',
                      minValue: 0
                    },
                    vAxis: {
                      title: 'City'
                    }, 
                    backgroundColor: '#fff',
                    colors: ['#348ccc', '#42afff']
                  }}
                  />
                </div>
              </div>
              <div className="infoChart stat-graph" style={{order: 1}}>
                <h3>Bar Graph</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Odio ipsam dolores quisquam at architecto perspiciatis obcaecati aspernatur rem, 
                  hic beatae assumenda quod ut sint molestias inventore in ex soluta nostrum!</p>
              </div>
            </div>
            <div className="Graph">
              <div className="chart place-graph" style={{order: 1}}>
                <div id="chart_divline" className="reps">
                  <Chart 
                    data = {[[
                        {type: 'number', label: 'X' },
                        {type: 'number', label: 'Spam' }
                      ],
                      [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
                      [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
                      [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
                      [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
                      [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
                      [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
                      [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
                      [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
                      [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
                      [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
                      [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
                      [66, 70], [67, 72], [68, 75], [69, 80]
                    ]}
                    chartType = 'LineChart'
                    options = {{
                      hAxis: {
                        title: 'Time'
                      },
                      vAxis: {
                        title: 'Victims'
                      }, 
                      backgroundColor: '#fff',
                      colors: ['#348ccc'],
                      legend: { position: 'bottom' }
                    }}
                  />
                </div>
              </div>
              <div className="infoChart stat-graph" style={{order: 2}}>
                <h3>Line Graph</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Odio ipsam dolores quisquam at architecto perspiciatis obcaecati aspernatur rem, 
                  hic beatae assumenda quod ut sint molestias inventore in ex soluta nostrum!</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default StatGraphs
