import React from 'react'
import { Link } from 'react-router-dom'

//Style
import "./Header.css"

//Assets
import teleclinix from '../../assets/teleclinixlogo.svg'


const Header = ({ isLoggedIn }) => {

    return (
        <div>
            <header className="navbar navbar-expand-lg navbar-light bg-light mt-3 py-2">
                <div className="navbar-brand">
                    <img src={teleclinix} alt="Teleclinix" className='logo' />
                </div>
                <button className="navbar-toggler" type='button' data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id='navbarNav'>
                    <ul className="contact navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Doctors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FAQs</a>
                        </li>
                    </ul>
                    {isLoggedIn && (
                        <ul className='logout navbar-nav ml-5'>
                            <li className='log'>
                                <Link to="/authentication/login" className='logb p-2' >Sign-In</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </header>
        </div>
    )
}

export default Header