import './App.css'
import "./components/Navbar.css"
import NavBar from "./components/Navbar"
import {  Routes, Route } from "react-router-dom" 
import { DataFetchingComponent } from './DataFetchingComponent'

// Importa tus componentes
import ContactUs from "./pages/ContactUs";
import SingIn from "./components/SignIn";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from "./components/Cart/CartContext";
import CartContainer from "./components/Cart/CartContainer";

function App() {
  return (
    
    <DataFetchingComponent>
    <div className='app'>
      
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path='/skicategory/:category' element={<ItemListContainer />} />
            <Route path='/items/:id' element={<ItemDetailContainer />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/Signin' element={<SingIn />} />
            <Route path='/CartWidget' element={<CartContainer />} />
          </Routes>
        
    </div>
    </DataFetchingComponent>
  )
}

export default App

