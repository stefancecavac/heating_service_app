import { useEffect } from 'react'
import { useProductContext } from '../../hooks/useProductContext'
import { Link } from 'react-router-dom'

import StoveCard from '../../components/stoveCard/stoveCard'
import Aside from '../../components/aside/aside'

import './home.css'

const Home = () => {
    const { products, dispatch } = useProductContext()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4000/api/products', {
                headers: {

                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_PRODUCTS', payload: json })
            }

        }

        fetchData()

    }, [dispatch])

    return (
        <div className='home'>
            <div className='homecenter'>
                <h2>My stoves:</h2>
                {products && products.map((product) => (
                   <Link to={`/${product._id}`} key={product._id}  > <StoveCard product={product} ></StoveCard></Link>
                ))}
            </div>
                    
            <div className='homeside'>
                <Aside></Aside>
            </div>
        </div>

    )
}

export default Home