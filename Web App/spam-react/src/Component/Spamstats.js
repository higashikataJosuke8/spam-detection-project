import React from 'react'

const Spamstats = () => {
    return (
        <>
           <div className="topSpam">
                <div className="info">
                    <h2 className="numbers">22.43 billion</h2>
                    <h4>legitimate mails sent per day </h4>
                </div>
                <div className="info">
                    <h2 className="numbers">85%</h2>
                    <h4>of emails are spam</h4>
                </div>
                <div className="info">
                    <h2 className="numbers">18.7 billion</h2>
                    <h4> sms sent worldwide every day</h4>
                </div>
                <div className="info">
                    <h2 className="numbers">122.3 billion</h2>
                    <h4> spam mails are sent per day</h4>
                </div>
            </div>
            <div className="bottomSpam">
                <div className="emailStats">
                    <h2>Email Stats</h2>
                    <div className="sources">
                        <ul>
                            <li><i className="fa fa-envelope"></i><h4> 4.03 billion email accounts</h4></li>
                            <li><i className="fa fa-google"></i><h4> 1.8 billion Gmail accounts</h4></li>
                            <li><i className="fa fa-yahoo"></i><h4> 220 million Yahoo! accounts</h4></li>
                            <li><i className="fa fa-apple"></i><h4> 850 million iCloud accounts</h4></li>
                        </ul>
                    </div>
                </div>
                <div className="smsStats">
                    <h2>Spam Stats</h2>
                    <div className="sources">
                        <ul>
                            <li><i className="fa fa-bullhorn"></i><h4>36%  are advertisements</h4></li>
                            <li><i className="fa fa-window-close"></i><h4>31.7% are Adult content</h4></li>
                            <li><i className="fa fa-bitcoin"></i><h4>26.5% are financial matters</h4></li>
                            <li><i className="fa fa-user-circle"></i><h4>2.5% are fraud accounts</h4></li>
                        </ul>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Spamstats
