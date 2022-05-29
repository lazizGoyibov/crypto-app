import Header from '../containers/Header'
import Footer from '../containers/Footer'

import {Helmet} from 'react-helmet'

import '../assets/styles/main.scss'


const ConnectPage = () => {
    return (
        <div className="connectPage">

            <Helmet>
                <title>
                    ConnectWallet
                </title>
            </Helmet>

            <Header/>


            <Footer/>
        </div>
    )
}

export default ConnectPage