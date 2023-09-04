import './styles/App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import components and pages
import  ContactUs from "./pages/Contact-us.jsx";
import HomePage from './pages/Home-page';
import NavBar from './components/Nav-bar';
import Slider from './components/Slider';
import Tour from './components/Tour';

// import utilities
import { SliderIMG } from './components/Images-slider';
import LoginPage from './pages/Login-page';
import PostForm from './forms/Post-Form';
import UniquePost from './components/Unique-post';


// import Menu from './components/Menu'

function App() {

  return (
    <>
        <Router>
          <Slider slides={SliderIMG}/>
            <main>
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/contact" element={<ContactUs />}></Route>
                <Route path="/tour" element={<Tour />}></Route>
                <Route path="/diblog" element={<LoginPage />}></Route>
                <Route path="/dibposts" element={<PostForm />}></Route>
                <Route path="/posts/:id" element={<UniquePost />}></Route>
                {/* <Route path="" element={}></Route>
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



