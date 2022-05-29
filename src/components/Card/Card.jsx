
import Avatars from '../../assets/images/avatars.svg'
import {Link} from 'react-router-dom'

import './Card.scss'
import '../../assets/styles/main.scss'


const Card = ({Rasm, Title}) => {
    return (
     
             <Link to="" className="card">
        <div className="card-inner">
           

            <div className="create-card-main">
                <img src={Rasm} alt="" className="create-card__img" />

                <div className="create-card-titles-wrapper">
                    <h5 className="create-card__title1">
                      {Title}
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

        
        </div>
    </Link>
      
    )
}


export default Card;