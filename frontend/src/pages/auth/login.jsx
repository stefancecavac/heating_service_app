import { useState } from "react"
import {UseLogin} from '../../hooks/useLoginHook'
import './login.css'
import {Link} from 'react-router-dom'
 
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  

    const { login, error } = UseLogin()


    const handleLogin = async (e) => {
        e.preventDefault()
        await login(email, password, name)

    }

    return (
        <div className="login">

            <form onSubmit={handleLogin}>
                <h2>login</h2>

                <label>email:</label>
                <input type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}></input>

                <label>password:</label>
                <input type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}></input>

              
                <button > login</button>
                <p>dont have a account? Register <Link to='/register'>here</Link></p>

                {error && <div className="error">{error}</div>}

            </form>
        </div>
    )
}

export default Login