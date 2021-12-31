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
                <p>
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
          </div>
        </div>
    )
}

export default StatGraphs
