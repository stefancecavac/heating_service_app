import {Link} from 'react-router-dom'
import { useUserContext } from '../../hooks/useUserContext'

import './userinfo.css'

const UserInfo = () =>{
    const {user,dispatch} = useUserContext()
  


    const handleLogout = async() => {
        localStorage.removeItem('user')

        dispatch({type:'LOGOUT'})
      
        
    }

    return(
        <div className='userinfo'>
        <div className='user'>
            {user && user.name}
        </div>

        <div className='auth'>
       { !user ? (<Link to='login'>Login</Link>) : (<button onClick={handleLogout}>Logout</button>)}
        </div>
        </div>
      
    )
}

export default UserInfo