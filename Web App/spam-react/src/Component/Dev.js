import React from 'react'
import Devpic from './default_pic.jpg'

const Dev = (props) => {
    return (
        <div className={props.class} id="wrapdev1">
            <label htmlFor={props.for}>
            <div className="dev" id="dev1">
                <div className="blue-bg" id="blue-bg">
                    <h1 className="username">{props.user}</h1>
                </div>
                <img src={Devpic} alt="Labay" className="picture" />
                <h3 className="name">{props.dev}</h3>
                <div className="addtl-details">
                    <h5 className="role">{props.role}</h5>
                    <p className="quote"><i className="fa fa-quote-left"></i>{props.quote}<i className="fa fa-quote-right"></i></p>
                </div>
            </div>
            </label>
        </div>
    )
}

export default Dev
