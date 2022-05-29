import Header2 from '../containers/Header2'
import Footer from '../containers/Footer'
import Card from '../components/Card'
import ProfileInfo from '../containers/ProfileInfo'


import Img1 from '../assets/images/img1.jpg'
import Img2 from '../assets/images/img2.jpg'
import Img3 from '../assets/images/img3.jpg'

import Gallery from '../assets/images/gallery.svg'
import Edit from '../assets/images/edit.svg'

import Back from '../assets/images/back.jpg'


import {Link} from 'react-router-dom'
import {useState} from 'react'


import '../assets/styles/main.scss'


const List = [
    {
        title: "Amazing digital art" ,
        img: Img1
    },

    {
        title: "Colorful Keyboard" ,
        img: Img2
    },

    {
        title: "Black Golden Tiger" ,
        img: Img3
    }
]


const ProfilePage = () => {

    const [state,setState] = useState('')

    return (
        <div className="profilePage">

            <Header2/>

            <div className="profilePage-main">
                <div className="profilePage-top">
                    <img src={Back} alt="" />


                    <div className="PPage-btns">
                        <button className='profile__btns'>
                        Edit cover photo
                        <img src={Gallery} alt="" />
                        </button>
                        <button className='profile__btns'>
                        Edit profile
                        <img src={Edit} alt="" />
                        </button>
                    </div>
                </div>

                <ProfileInfo/>

                <div className="profilePage-bottom container">
                    <div className="ppage-bottom-inner">
                    <div className="PPage-links-into">
                        <Link to="" className={`ppage-links  ${state === 'sale' ? 'active' : ''}`} onClick={()=> setState('sale')}>
                        On Sale
                        </Link>
                        <Link to="" className={`ppage-links ${state === 'Collectibles' ? 'active' : ''}`} onClick={()=> setState('Collectibles')}>
                        Collectibles
                        </Link>
                        <Link to="" className={`ppage-links ${state === 'Created' ? 'active' : ''}`} onClick={()=> setState('Created')}>
                        Created
                        </Link>
                        <Link to="" className={`ppage-links ${state === 'Likes' ? 'active' : ''}`} onClick={()=> setState('Likes')}>
                        Likes
                        </Link>
                        <Link to="" className={`ppage-links ${state === 'Following' ? 'active' : ''}`} onClick={()=> setState('Following')}>
                        Following
                        </Link>
                        <Link to="" className={`ppage-links ${state === 'Followers' ? 'active' : ''}`} onClick={()=> setState('Followers')}>
                        Followers
                        </Link>
                    </div>

                    <div className="ppage-cards">
                        {
                            List.map((item) => (
                                <Card
                                    Title={item.title}
                                    Rasm={item.img}
                                />

                            ))
                        }
                    </div>
                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    )
}

export default ProfilePage