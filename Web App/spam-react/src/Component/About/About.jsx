import React from 'react';
import Logo from '../Logo';
import './Objective.css'
import Developers from './Developers';

const Objective = () => {
    return (
        <div className="about-wrapper">
            <div className="todo-cont">
                <h2>What do we do?</h2>
            </div>
            <div className="about-cont">
                <div className="about" id="about1">
                    <h5>Spam are unsolicited bulk messages sent to multiple recipients which ranges from harmless advertising messages to destructive malware designed with malicious intent.</h5>
                </div>
                <div className="about" id="about2">
                    <h5>Spam filtering is a growing subject of research and is still being improved upon, which is why machine learning techniques are the future of spam filtering as it can be automated and adaptable to any kind of spamming techniques.</h5>
                </div>
            </div>
        </div>
    )
}
const About = () => {
    return (
        <div className='main'>
            <Logo />
            <Objective />
            <Developers />
        </div>
    )
}

export default About
