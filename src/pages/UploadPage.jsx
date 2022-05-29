import Header2 from '../containers/Header2'
import Footer from '../containers/Footer'
import UploadSect1 from '../containers/UploadSect1'
import {Helmet} from 'react-helmet'

import '../assets/styles/main.scss'


const UploadPage = () => {
    return (
        <div className="profilePage">

            <Helmet>
                <title>
                    Upload
                </title>
            </Helmet>
            <Header2/>


            <div className="">
                <UploadSect1/>
            </div>

            <Footer/>
        </div>
    )
}

export default UploadPage;