import './stoveCard.css'
import { GiFurnace } from "react-icons/gi";


const StoveCard = ({ product }) => {


    return (
        <div className="stovecard">
            <div className='icon'>
                <GiFurnace></GiFurnace>
            </div>
            <div className='details'>
                <h2>{product.name}</h2>
                <p>{product.type}</p>
                <p>{product.model}</p>
                
            </div>
            <div className='tehnical'>
            <p>serial number: {product._id}</p>

            </div>
        </div>
    )
}

export default StoveCard