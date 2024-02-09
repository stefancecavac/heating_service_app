import { useEffect } from "react"
import { useProductContext } from "../../hooks/useProductContext"
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { dispatch, singleProduct } = useProductContext()
    const { productId } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/api/products/${productId}`, {
                headers: {

                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_PRODUCT', payload: json })
            }

        }

        fetchData()

    }, [dispatch, productId])

    return (
        <div className="productdetail">
            {singleProduct && (
                <h2>{singleProduct.name}</h2>
            )}
        </div>

    )
}

export default ProductDetail