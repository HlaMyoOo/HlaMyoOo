import { Route, Routes } from "react-router-dom";
import Navbar from "./views/components/Navbar";
import Contact from "./views/pages/Contact";
import Home from "./views/pages/Home";
import Services from "./views/pages/Services";
import Story from "./views/pages/Story";

const App = (props) => {
  return (
    <div>
      <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="story" element={<Story />} />
              <Route path="contact" element={<Contact />} />
              <Route path="services" element={<Services />} />
            </Routes>
      
    </div>
  )
}

export default App;