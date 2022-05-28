import React from 'react'
import detekt from './detekt-dark.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <img src={detekt} className='footer-logo' alt=''/>
                <p>Copyright &copy; 2022</p>
                <ul className="socials">
                    <li><a href="https://facebok.com/"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=detekt.ml11@gmail.com"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="https://youtube.com/"><i className="fa fa-youtube"></i></a></li>
                    <li><a href="https://chrome.google.com/webstore/detail/spam-detekt/ldfgjnbpinimehmomejjocfdegmbhaba"><i className="fa fa-puzzle-piece"></i></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
