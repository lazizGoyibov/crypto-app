import createSingle from '../../assets/images/create.svg'
import createMultiple from '../../assets/images/createMultiple.svg'
import Strelka from '../../assets/images/chapstrelka.svg'
import { Breadcrumbs } from '@mui/material';
import {Link} from 'react-router-dom'


import './UploadSect1.scss'

const UploadSect1 = () => {
    return (
        <div className="upload">
            <div className="upload-wrapper">
            <div className="upload-top container">
                <Link to="/">
                <button className="upload-top-btn">
                    <img src={Strelka} alt="" />
                    Back to home
                </button>
                </Link>

                <div className="">
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                        <Link className='crumb-links' to="/">Home</Link>
                        <Link className='crumb-links' to="">Upload Item</Link>
                </Breadcrumbs>
                </div>
            </div>

            <hr />

            <div className="upload-bottom container">

                <div className="upload-bottom-block1">
                    <h3 className="upload__title1">
                    Upload item
                    </h3>

                    <div className="upload-text-wrap">
                    <p className="upload__text">
                    Choose “Single” if you want your collectible to be one of a 
                    kind or “Multiple” 
                    if you want to sell one collectible multiple times
                    </p>
                    </div>
                </div>
                
                    <div className="upload-bottom-block2">
                        <div className="block2-inner">
                        <div className="block2-card-wrapper">
                            <div className="upload-card1">
                                <div className="upload-card1-inner">
                                    <img src={createSingle} alt="" className="upload-card1__img" />

                                    <Link to="/createSingle" className='upload-btn-wrap'>
                                    <button className="upload-card1__btn1">
                                    Create Single
                                    </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="upload-card2">
                                <div className="upload-card2-inner">
                                    <img src={createMultiple} alt="" className="upload-card1__img" />

                                    <Link to="" className='upload-btn-wrap'>
                                    <button className="upload-card1__btn2">
                                    Create Multiple
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="upload-text-wrap">
                        <p className="upload-bottom-block2__text">
                        We do not own your private keys and cannot access your funds without your confirmation.
                        </p>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    )
}

export default UploadSect1;