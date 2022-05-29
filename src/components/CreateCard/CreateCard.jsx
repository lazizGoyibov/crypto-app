import eks from '../../assets/images/x.svg'
import Rasm from '../../assets/images/rasm.jpg'
import Avatars from '../../assets/images/avatars.svg'

import '../../assets/styles/main.scss'


const CreateCard = () => {
    return (
        <div className="create-card">
        <div className="create-card-inner">
            <h3 className="create-card__title">
            Preview
            </h3>

            <div className="create-card-main">
                <img src={Rasm} alt="" className="create-card__img" />

                <div className="create-card-titles-wrapper">
                    <h5 className="create-card__title1">
                        Black Golden Tiger
                    </h5>

                    <span className='create-card__addition'>
                        2.45 ETH
                    </span>
                </div>

                <div className="create-card-titles-wrapper">
                    <img src={Avatars} alt="" />

                    <span className="create-card__stock">
                        3 in stock
                    </span>
                </div>

                <div className="create-card-titles-wrapper">
                    <h5 className="create-card__bid">

                        Highest bid
                        <span>0.001 ETH</span>
                    </h5>

                    <span className="create-card__new">
                        New bid 🔥
                    </span>
                </div>
            </div>

            <button className="create-card__clear">
                <img src={eks} alt="" />
                Clear all
            </button>
        </div>
    </div>
    )
}

export default CreateCard