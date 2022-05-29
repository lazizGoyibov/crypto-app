import {Link} from 'react-router-dom'


import Logo from '../../assets/images/logo2.svg'
import Search from '../../assets/images/search.svg'
import Bell from '../../assets/images/bell.svg'
import Bola2 from '../../assets/images/bola2.jpg'
import { Badge } from '@mui/material';




import './Header2.scss'


const Header = () => {
    return (
        <div className="header ">
            <div className="header-inner container">
                <div className="header-left">
                    <Link to="/">
                        <img src={Logo} alt="" className="header-left__logo" />
                    </Link>

                    <div className="line"></div>

                    <Link to="" className='header-left__links'>Discover</Link>
                    <Link to="" className='header-left__links'>How it work</Link>
                </div>
                <div className="header-right">
                    <label htmlFor="searcher" className='header-right-label'>
                    <input type="search" name="" placeholder='Search' id="searcher" className="header-right__searcher" />
                    <img src={Search} alt="" className='header-right__icon'/>
                    </label>

                    

                            <button className='header-right-btn'>

                                
                    <Badge badgeContent="" color="success" variant='dot'>
                    <img src={Bell} alt=""  className='header-right-btn__bell'/>
                    </Badge>
                               
                            </button>
                 

                    <Link to="/upload">
                        <button className="header-right__btn1">
                        Upload
                        </button>
                    
                    </Link>
                    
                    <Link to="/profile">
                        <button className="header-right__btn2-other">
                                <img src={Bola2} alt="" className="header-right__img" />
                                <p className="header-right__text">
                                7.00698 <span>ETH</span>
                                </p>
                            </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header