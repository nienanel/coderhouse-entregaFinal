import './App.css'
import "./components/Navbar.css"
import NavBar from "./components/Navbar"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import { useContext } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {

  

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route path='/skiCategory/:category' element={<ItemListContainer />} />
        <Route path='/items/:id' element={<ItemDetailContainer />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/CartWidget' element={<CartWidget />} />
      </Routes>
    </>
  )
}

export default App
