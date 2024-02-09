import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header/header'

import Home from './pages/home/home'
import ProductDetail from './pages/detailPage/productDetail'

function App() {


  return (
    <>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>

          <Route path='/:productId' element={<ProductDetail></ProductDetail>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
