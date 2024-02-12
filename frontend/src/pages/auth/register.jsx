import { useState } from "react"
import { UseRegister } from '../../hooks/useRegisterHook'
import { Link } from "react-router-dom"

import './register.css'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')


    const { register, error } = UseRegister()


    const handleRegister = async (e) => {
        e.preventDefault()
        await register(email, password, name, lastName, phoneNumber, address)

    }

    return (
        <div className="register">

            <form onSubmit={handleRegister}>
                <h2>register</h2>

                <label>email:</label>
                <input type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}></input>

                <label>password:</label>
                <input type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}></input>

                <label>Name:</label>
                <input type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}></input>

                <label>Last name:</label>
                <input type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}></input>

                <label>Phone number:</label>
                <input type="number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}></input>

                <label>address:</label>
                <input type="text"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}></input>


                <button > register</button>

                <p>Already have account? Login <Link to='/login'>here</Link></p>


                {error && <div className="error">{error}</div>}

            </form>
        </div>
    )
}

export default Register