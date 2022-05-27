import BlueButton from '../BlueButton'
import WhiteButton from '../WhiteButton'

import Qiz from '../../assets/images/qiz.jpg'
import Bola from '../../assets/images/bola.jpg'
import Yashil from '../../assets/images/yashil.jpg'
import chapStrelka from '../../assets/images/chapstrelka.svg'
import ongStrelka from '../../assets/images/ongstrelka.svg'


import './HomeSection1Items.scss'


const HomeSection1Items = () => {
    return (
        <div className="homeSection1Items-wrapper">
            <div className="homeSection1Items-top">
                <div className="homeSection1Items-top-inner">
                <h4 className="homeSection1Items-top__title1">
                Create, explore, & collect digital art NFTs.
                </h4>

                <h2 className="homeSection1Items-top__title2">
                The new creative economy.
                </h2>


                <div className="top-wbtn-wrap">
                <button className="homeSection1Items-top__wbtn">
                Start your search
                </button>
                </div>
                </div>
            </div>


            <div className="homeSection1Items">
            <div className="homeSection1Items-left">
                <img src={Qiz} alt="" className='homeSection1Items-left__img'/>
            </div>
            <div className="homeSection1Items-right">
                <h1 className="homeSection1Items-right__title">
                    the creator network®
                </h1>   

                <div className="homeSection1Items-titleBottomItems">
                        <div className="titleBottomItems-item">
                            <img src={Bola} alt="" className="titleBottomItems-item__img" />

                            <div className="titleBottomItems-item-texts">
                                <h4 className="titleBottomItems-item__title1">
                                Creator
                                </h4>
                                <h5 className="titleBottomItems-item__title2">
                                Enrico Cole
                                </h5>
                            </div>
                        </div>
                        <div className="titleBottomItems-item">
                            <img src={Yashil} alt="" className="titleBottomItems-item__img" />

                            <div className="titleBottomItems-item-texts">
                                <h4 className="titleBottomItems-item__title1">
                                Instant price
                                </h4>
                                <h5 className="titleBottomItems-item__title2">
                                3.5 ETH
                                </h5>
                            </div>
                        </div>
                </div>


                <div className="homeSection1Items-littleCard">
                    <div className="homeSection1Items-littleCard-inner">
                        <h5 className="littleCard__title1">
                        Current Bid
                    </h5>

                     <h2 className="littleCard__title2">
                     1.00 ETH
                    </h2>

                    <h3 className="littleCard__title3">
                    $3,618.36
                    </h3>

                    <div className="homeSection1Items-littleCard-bottom">
                            <h3 className="littleCard-bottom__title1">
                            Auction ending in
                            </h3>

                           <div className="homeSection1Items-littleCard-bottom-numbers">
                                    <div className="littleCard-bottom-numbers-blocks">
                                        <h4 className="numbers-blocks__title1">
                                        19
                                        </h4>
                                        <h5 className="numbers-blocks__title2">
                                        Hrs
                                        </h5>
                                    </div>

                                    <div className="littleCard-bottom-numbers-blocks">
                                        <h4 className="numbers-blocks__title1">
                                        24
                                        </h4>
                                        <h5 className="numbers-blocks__title2">
                                        mins
                                        </h5>
                                    </div>

                                    <div className="littleCard-bottom-numbers-blocks">
                                        <h4 className="numbers-blocks__title1">
                                        19
                                        </h4>
                                        <h5 className="numbers-blocks__title2">
                                        secs
                                        </h5>
                                    </div>
                           </div>

                    </div>
                    </div>

                </div>

                <div className="homeSection1Items-buttons">
            
                    <div className="bButton">
                    <BlueButton title="Place a bid"/>
                    </div>
               


                    <div className="wButton">
                    <WhiteButton title="View item"/>
                    </div>
                  
                </div>


                <div className="homeSection1Items-buttons-directions">
                    <button className='buttons-directions-btn'>
                        <img src={chapStrelka} alt="" className='directions-btn__img1'/>
                    </button>

                    <button className='buttons-directions-btn'>
                        <img src={ongStrelka} alt="" className='directions-btn__img2'/>
                    </button>


                </div>


            </div>    
        </div>
        </div>
    )
}

export default HomeSection1Items