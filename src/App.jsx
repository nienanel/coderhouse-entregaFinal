import './App.css'
import "./components/Navbar.css"

import {  Routes, Route } from "react-router-dom" 
import { render } from 'react-dom'

import NavBar from "./components/Navbar"
import { DataFetchingComponent } from './DataFetchingComponent'
import ContactUs from "./pages/ContactUs";
import SingIn from "./pages/SignIn";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from "./components/Cart/CartContext";
import CartContainer from "./components/Cart/CartContainer";

function App() {
  return (
    <DataFetchingComponent>
    <CartProvider>
    <div className='app'>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path='/skicategory/:category' element={<ItemListContainer />} />
            <Route path='/items/:id' element={<ItemDetailContainer />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/Signin' element={<SingIn />} />
            <Route path='/Cart' element={<CartContainer />} />
          </Routes>
        
    </div>
    </CartProvider>
    </DataFetchingComponent>
  )
}

export default App

