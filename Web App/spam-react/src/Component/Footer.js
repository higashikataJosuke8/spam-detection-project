import React from 'react'
import detekt from './detekt-dark.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <img src={detekt} className='footer-logo' alt=''/>
                <p>Copyright &copy; 2022</p>
                <ul className="socials">
                    <li><a href="https://twitter.com/"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://twitter.com/"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="https://twitter.com/"><i className="fa fa-youtube"></i></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
