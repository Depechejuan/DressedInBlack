import './styles/App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import  ContactUs from "./pages/Contact-us.jsx";
import HomePage from './pages/Home-page';
import NavBar from './components/Nav-bar';
import Slider from './components/Slider';
import { SliderIMG } from './components/Images-slider';



// import Menu from './components/Menu'

function App() {

  return (
    <>
        <Router>
          <Slider slides={SliderIMG}/>
          <HomePage />
            <main>
              <Routes>
                <Route path="/contact" element={<ContactUs />}></Route>
                {/* <Route path="/diblog" element={<Login />}></Route>
                <Route path="" element={}></Route>
                <Route path="" element={}></Route>
                <Route path="" element={}></Route>
                <Route path="" element={}></Route>
                <Route path="" element={}></Route> */}
              </Routes>
            </main>
          <NavBar />
          {/* <Menu /> */}
        </Router>
    </>
  )
}

export default App



