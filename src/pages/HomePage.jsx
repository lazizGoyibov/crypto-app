import Header from '../containers/Header'
import HomeSection1 from '../containers/HomeSection1'
import Footer from '../containers/Footer'


import '../assets/styles/main.scss'


const HomePage = () => {
    return (
        <div className="homePage">
            <Header/>


            <HomeSection1/>


            <Footer/>
        </div>
    )
}

export default HomePage