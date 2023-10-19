import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/Cart/CartContext";
import { DataFetchingComponent } from './DataFetchingComponent';
import NavBar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import SignIn from "./pages/SignIn";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from "./components/Cart/CartContainer";
import CheckOutPage from './pages/CheckOutPage';


export default function App() {
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
            <Route path='/Signin' element={<SignIn />} />
            <Route path='/Cart' element={<CartContainer />} />
            <Route path="/checkout" element={<CheckOutPage />} />
          </Routes>
        </div>
      </CartProvider>
    </DataFetchingComponent>
  )
}



