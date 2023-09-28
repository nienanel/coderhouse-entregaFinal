import './App.css'
import "./components/Navbar.css"
import NavBar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" // Importa BrowserRouter y úsalo como alias

// Importa tus componentes
import ContactUs from "./pages/ContactUs";
import SingIn from "./components/SignIn";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from "./components/Cart/CartContext";
import CartContainer from "./components/Cart/CartContainer";

function App() {
  return (
    <>
      <Router> 
        <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path='/skiCategory/:category' element={<ItemListContainer />} />
            <Route path='/items/:id' element={<ItemDetailContainer />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/SingIn' element={<SingIn />} />
            <Route path='/CartWidget' element={<CartContainer />} />
          </Routes>
        </CartProvider>
      </Router>
    </>
  )
}

export default App

