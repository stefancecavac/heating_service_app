import './header.css'

import UserInfo from '../user info/userInfo'
import { Link } from 'react-router-dom'

const Header = () =>{


    return(
        <header>
            <Link to='/'><h1>My Thermo Block</h1></Link>
            <UserInfo></UserInfo>
        </header>
    )
}

export default Header