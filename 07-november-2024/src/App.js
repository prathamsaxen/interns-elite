import "./App.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return <div className="App">
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  </div>;
}

export default App;
