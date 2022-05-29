import {Link} from 'react-router-dom'

import Logo from '../../assets/images/logo2.svg'
import oqStrelka from '../../assets/images/white.svg'


import './Footer.scss'


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-inner container">
                <div className="footer-top">
                    <div className="footer-top-blocks">
                    <Link to="/">
                        <img src={Logo} alt="" className="footer-top__logo" />
                    </Link>    

                    <h3 className="footer-top__title">
                    The New Creative Economy.
                    </h3>
                    </div>

                    <div className="footer-top-blocks">
                        <h4 className="footer-top__title2">
                        Crypter.
                        </h4>

                        <Link to="" className="footer-top__links">Discover</Link>
                        <Link to="" className="footer-top__links">Connect wallet</Link>
                        <Link to="" className="footer-top__links">Create item</Link>
                    </div>

                    <div className="footer-top-blocks">
                    <h4 className="footer-top__title2">
                        Info
                        </h4>

                        <Link to="" className="footer-top__links">Download</Link>
                        <Link to="" className="footer-top__links">Demos</Link>
                        <Link to="" className="footer-top__links">Support</Link>
                    </div>

                    <div className="footer-top-blocks">
                    <h4 className="footer-top__title2">
                        Join Newsletter
                        </h4>

                        <p className="footer-top__text">
                        Subscribe our newsletter to get more free design course and resource
                        </p>

                        <label htmlFor="email" className="footer-top-label">
                        <input type="email" id='email' placeholder='Enter your email' className="footer-top__input" />
                        <button className="footer-top__btn">
                            <img src={oqStrelka} alt="" className='footer-top__icon'/>
                        </button>
                        </label>
                    </div>
                </div>

                <hr />

                <div className="footer-bottom">
                    <p className="footer-bottom__text">
                    Copyright © 2021 UI8 LLC. All rights reserved
                    </p>

                    <p className="footer-bottom-text2">
                    We use cookies for better service.
                        <Link to="" className='text2__link'>
                        Accept 
                        </Link> 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer