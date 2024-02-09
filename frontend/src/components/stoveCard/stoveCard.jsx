import './stoveCard.css'

const StoveCard = ({product}) => {


    return(
        <div className="stovecard">
            <h2>{product.name}</h2>
            <p>{product.type}</p>
            <p>{product.model}</p>
        </div>
    )
}

export default StoveCard