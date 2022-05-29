import Footer from '../containers/Footer'
import CreateCard from '../components/CreateCard'

import File from '../assets/images/file.svg'
import Header2 from '../containers/Header2'
import Strelka from '../assets/images/white.svg'

import { TextField } from '@mui/material';
import { Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Select } from '@mui/material';

import {Helmet} from 'react-helmet'
import MenuItem from '@mui/material/MenuItem';


import '../assets/styles/main.scss'


const AntSwitch = styled(Switch)(({ theme }) => ({
width: 48,
height: 24,
padding: 0,
display: 'flex',
'&:active': {
'& .MuiSwitch-thumb': {
width: 15,
},
'& .MuiSwitch-switchBase.Mui-checked': {
transform: 'translateX(9px)',
},
},
'& .MuiSwitch-switchBase': {
padding: 2,
'&.Mui-checked': {
transform: 'translateX(24px)',
color: '#fff',
'& + .MuiSwitch-track': {
opacity: 1,
backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
},
},
},
'& .MuiSwitch-thumb': {
boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
width: 20,
height: 20,
borderRadius: 12,
transition: theme.transitions.create(['width'], {
duration: 200,
}),
},
'& .MuiSwitch-track': {
borderRadius: 22 / 2,
opacity: 1,
backgroundColor:
theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
boxSizing: 'border-box',
},
}));

const CreateSinglePage = () => {
return (
<div className="">

            <Helmet>
                <title>
                    CreateSingle
                </title>
            </Helmet>
    <Header2 />

    <div className="create-wrapper container">

        <div className="create-left">
            <div className="create-left-top">
                <div className="create-left-top-block1">
                    <h1 className="create__title1">
                        Create single collectible
                    </h1>


                    <button className="create__btn">
                        Switch to Multiple
                    </button>
                </div>

                <div className="create-left-top-block2">
                    <h4 className="create__title2">
                      Upload file
                    </h4>

                    <p className="create__text">
                    Drag or choose your file to upload
                    </p>

                    <label htmlFor="file" className="create-label">
                        <div className="create-label-inner">
                        <input type="file" name="" id="file" />
                        <div className="">
                        <img src={File} alt="" className="create__fileImg" />
                        </div>
                        <p className="create-input__text">
                            PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.
                        </p>
                        </div>

                    </label>
                </div>
            </div>



            <div className="create-left-inputs">
                <h4 className="create__title2">
                    Item Details
                </h4>


                <div className="create-left-inputs-block1">
                    <div className="create-input-wrap">
                        <label htmlFor="name" className="create__label-input">
                            Item name
                        </label>

                        <TextField variant='outlined' fullWidth placeholder='e. g. "Redeemable Bitcoin Card with logo"' />
                    </div>

                    <div className="create-input-wrap">
                        <label htmlFor="description" className="create__label-input">
                            Description
                        </label>
                        <TextField variant='outlined' fullWidth placeholder='e. g. “After purchasing you will able to recived the logo...”' />
                    </div>
                </div>

                <div className="create-left-inputs-block2">
                    <div className="create-inputs">
                        <label htmlFor="" className="create__label-input">Royalties</label>
                        <Select
                            labelId="demo-simple-select-label"
                            
                            id="demo-simple-select"
                            
                            className='select'
                        >
                            <MenuItem defaultValue value={10}>10%</MenuItem>
                            <MenuItem value={20}>20%</MenuItem>
                            <MenuItem value={30}>30%</MenuItem>
                        </Select>
                    </div>


                    <div className="create-inputs">
                        <label htmlFor="" className="create__label-input">Size</label>
                        <TextField placeholder='e. g. Size' variant='outlined' />
                    </div>

                    <div className="create-inputs">
                        <label htmlFor="" className="create__label-input">Propertie</label>
                        <TextField placeholder='e. g. Propertie' variant='outlined' />
                    </div>
                </div>
            </div>


            <hr />


            <div className="create-switches">
                <div className="switches-block">
                    <div className="switches-block-left">
                        <h3 className="create__switch-title1">
                        Put on sale
                        </h3>

                        <h3 className="create__switch-text1">
                        You’ll receive bids on this item
                        </h3>


                    </div>
                    <div className="switches-block-right">
                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                    </div>
                </div>

                <div className="switches-block">
                    <div className="switches-block-left">
                        <h3 className="create__switch-title1">
                        Instant sale price
                        </h3>

                        <h3 className="create__switch-text1">
                        Enter the price for which the item will be instantly sold
                        </h3>


                    </div>
                    <div className="switches-block-right">
                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                    </div>
                </div>


                <div className="switches-block">
                    <div className="switches-block-left">
                        <h3 className="create__switch-title1">
                        Unlock once purchased
                        </h3>

                        <h3 className="create__switch-text1">
                        Content will be unlocked after successful transaction
                        </h3>


                    </div>
                    <div className="switches-block-right">
                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                    </div>
                </div>

                <div className="switches-block">
                    <div className="switches-block-left">
                        <h3 className="create__switch-title1">
                        Choose collection
                        </h3>

                        <h3 className="create__switch-text1">
                        Choose an exiting collection or create a new one
                        </h3>


                    </div>

                </div>


            </div>



            <div className="create-carusel">
                <button className="create-carusel-blocks">
                    <div className="create-carusel-blocks-inner">
                        <div className="circle">

                        </div>

                        <h4 className="create-carusel__title">
                            Create collection
                        </h4>
                    </div>
                </button>

                <button className="create-carusel-blocks">
                    <div className="create-carusel-blocks-inner">
                        <div className="circle circle--green">

                        </div>

                        <h4 className="create-carusel__title">
                            Create collection
                        </h4>
                    </div>
                </button>


                <button className="create-carusel-blocks">
                    <div className="create-carusel-blocks-inner">
                        <div className="circle circle--red">

                        </div>

                        <h4 className="create-carusel__title">
                            Create collection
                        </h4>
                    </div>
                </button>


                <button className="create-carusel-blocks">
                    <div className="create-carusel-blocks-inner">
                        <div className="circle circle--other">

                        </div>

                        <h4 className="create-carusel__title">
                            Create collection
                        </h4>
                    </div>
                </button>

                <button className="create-carusel-blocks">
                    <div className="create-carusel-blocks-inner">
                        <div className="circle">

                        </div>

                        <h4 className="create-carusel__title">
                            Create collection
                        </h4>
                    </div>
                </button>



            </div>


            <div className="create-last-section">
                <button className="create-button">
                    Create item
                    <img src={Strelka} alt="" className="" />
                </button>

                <h4 className="create__last-title">
                    Auto saving
                </h4>
            </div>


        </div>

        <div className="create-right">
            <CreateCard/>
        </div>
    </div>


    <Footer/>
</div>


)
}

export default CreateSinglePage;