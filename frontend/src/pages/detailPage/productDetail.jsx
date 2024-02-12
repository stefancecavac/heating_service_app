import { useEffect } from "react"
import { useProductContext } from "../../hooks/useProductContext"
import { useParams } from 'react-router-dom'

import './productDetail.css'
import { useUserContext } from "../../hooks/useUserContext"

const ProductDetail = () => {
    const { dispatch, singleProduct } = useProductContext()
    const { productId } = useParams()
    const {user} = useUserContext()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/api/products/${productId}`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_PRODUCT', payload: json })
            }

        }

        fetchData()

    }, [dispatch, productId , user])

    return (
        <div className="productdetail">
            {singleProduct && (
                <>
                    <h2>{singleProduct.name}</h2>
                    <p>{singleProduct.model}</p>
                    <p>{singleProduct.power}</p>
                    <p>{singleProduct.fuelType}</p>
                    <p>Warranty valid till: {new Date(singleProduct.warranty.endDate).toLocaleDateString()}</p>

                    {singleProduct.maintenance.length > 0 && (
                        singleProduct.maintenance.map((maintenanceItem, index) => (
                            <div className="maintenance" key={index}>
                                <p>Maintenance Title: {maintenanceItem.title}</p>
                                <p>Maintenance Date: {new Date(maintenanceItem.date).toLocaleDateString()}</p>
                            </div>
                        ))
                    )}
                </>
            )}
        </div>

    )
}

export default ProductDetail