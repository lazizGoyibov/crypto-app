import {Link} from 'react-router-dom'
import ProfileImg from '../../assets/images/profile.jpg'
import Share from '../../assets/images/share.svg'
import More from '../../assets/images/more.svg'
import Twitter from '../../assets/images/twitter.svg'
import Insta from '../../assets/images/insta.svg'
import Facebook from '../../assets/images/facebook.svg'




import './ProfileInfo.scss'


const ProfileInfo = () => {
    return (
        <div className="profile-wrapper">
            <div className="profile-inner">
                <div className="profile-top">
                   <div className="profile-top-inner">
                   <img src={ProfileImg} alt='Profile-img' className="profile__img">
                        
                        </img>   
    
                        <h3 className="profile__title">
                        Enrico Cole
                        </h3>
    
                        <button className="profile-addres">
                        0xc4c16a645...b21a
                        </button>
    
                        <p className="profile__description">
                        A wholesome farm owner in Montana. 
                        Upcoming gallery solo show in Germany
                        </p>
                        
    
                        <Link to="https://ui8.net" className="profile__link">
                        https://ui8.net
                        </Link>
                   </div>
                </div>


                <div className="profile-main">
                    <button className="profile__follow-btn">
                    Follow
                    </button>

                    <button className="profile__download-btn">
                        <img src={Share} alt="" />
                    </button>

                    <button className="profile__more-btn">
                        <img src={More} alt="" />
                    </button>
                </div>


                <div className="profile-bottom">
                    <div className="profile-bottom-links">
                        <Link to="https://twitter.com/login" className='profile__links'>
                            <img src={Twitter} alt="Twitter" />
                        </Link>
                        <Link to="https://www.instagram.com/accounts/login/" className='profile__links'>
                            <img src={Insta} alt="Instagram" />
                        </Link>
                        <Link to="https://www.facebook.com/login/" className='profile__links'>
                            <img src={Facebook} alt="Facebook" />
                        </Link>
                    </div>

                    <hr />


                    <p className="profile__last-text">
                    Member since Mar 15, 2021
                    </p>
                </div>
            </div>
        </div>
    )
}


export default ProfileInfo;