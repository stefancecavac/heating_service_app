import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom'

import Header from './components/header/header'

import Home from './pages/home/home'
import ProductDetail from './pages/detailPage/productDetail'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import { useUserContext } from './hooks/useUserContext'

function App() {
  const {user } = useUserContext()

  return (
    <>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={!user ? <Navigate to='/login' /> : <Home />}></Route>

          <Route path='/:productId' element={!user ? <Navigate to='/login' /> : <ProductDetail></ProductDetail>}></Route>

          <Route path='/login' element={user ? <Navigate to='/'></Navigate>  :<Login />}></Route>
          <Route path='/register' element={user ? <Navigate to='/'></Navigate>  :<Register />}></Route>



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
