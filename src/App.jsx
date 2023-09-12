import './App.css'
import "./components/Navbar.css"
import NavBar from "./components/Navbar"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';



function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/skiCategory/:category' element={<ItemListContainer />} />
        <Route path='/skiCategory/:category' element={<ItemListContainer />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/CartWidget' element={<CartWidget />} />
      </Routes>
    </>
  )
}

export default App
