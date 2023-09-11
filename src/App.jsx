import './App.css'
import "./components/Navbar.css"
import NavBar from "./components/Navbar"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Mountain from './pages/Mountain';
import Race from './pages/Race';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import CartWidget from './components/CartWidget';



function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/Mountain' element={<Mountain />} />
        <Route path='/Race' element={<Race />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/CartWidget' element={<CartWidget />} />
      </Routes>
    </>
  )
}

export default App
