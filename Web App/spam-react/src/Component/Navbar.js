import React, {useState, useEffect} from 'react';
import './Navbar.css'
import { Link, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    const [check, setCheck] = useState(false);
    const [scroll, setScroll] = useState('');
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 0){
                setScroll('scrolled');
            }else{
                setScroll('');
            }
        });
    });
    const removeOverlay = () => {
        setCheck(false)
    }
    const openNav = () => {
        if(check){
            setCheck(false);
        }else{
            setCheck(true);
        }
    }
    return (
        <nav className={scroll}>
            <input type="checkbox" id="check" checked={check} onChange={openNav}/>
            <label htmlFor="check" className="checkbtn"><i className="fa fa-bars"></i></label>
            <div className="nav-overlay" onClick={removeOverlay}></div>
            <ul>
                <li><Link to='/' className={` ${
                    props.location.pathname=== "/" ? "active" : ""
                }`}>Home</Link>
                </li>
                <li><Link to='/analytics' className={` ${props.location.pathname === "/analytics" ? "active" : ""
                }`}>Analytics</Link></li>
                <li><Link to='/about' className={`${props.location.pathname === "/about" ? "active" : ""
                }`}>About</Link></li>
                <li><Link to='/contact' className={`${props.location.pathname === "/contact" ? "active" : ""
                }`}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar)
