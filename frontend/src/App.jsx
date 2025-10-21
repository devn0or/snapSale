import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './page/Home'
import Login from './page/Login'
import Register from './page/Register'
import Profile from './page/Profile'
import CollectionPage from './page/CollectionPage'
import ProductsDetails from './components/Products/ProductsDetails'
import Checkout from './components/Cart/Checkout'
import OrderDetailsPage from './page/OrderDetailsPage'
import MyOrderPage from './page/MyOrderPage'
import AdminLayout from './components/Admin/AdminLayout'
import AdminHomePage from './page/AdminHomePage'
import UserManagement from './components/Admin/UserManagement'
import ProductManagement from './components/Admin/ProductManagement'
import EditProduct from './components/Admin/EditProduct'
import OrderManagement from './components/Admin/OrderManagement'

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element= {<UserLayout/>}  >
       <Route index element ={<Home/>} ></Route>
       <Route path= 'login' element ={<Login/>} ></Route>
       <Route path= 'register' element ={<Register/>} ></Route>
       <Route path= 'profile' element ={<Profile/>} ></Route>
       <Route path= 'collections/:collection' element ={<CollectionPage/>} ></Route>
       <Route path= 'product/:id'   element={<ProductsDetails/>}></Route>
       <Route path= 'checkout'   element={<Checkout/>}></Route>
       <Route path= 'order/:id'   element={<OrderDetailsPage/>}></Route>
       <Route path= 'my-orders'   element={<MyOrderPage/>}></Route>
       <Route path= 'admin'   element={<AdminLayout/>}>
         <Route index element={<AdminHomePage/>} />
         <Route path='users' element={<UserManagement/>}/>
         <Route path='products' element={<ProductManagement/>}/>
         <Route path='products/:id/edit' element={<EditProduct/>}/>
         <Route path='orders' element={<OrderManagement/>}/>
       </Route>

      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App