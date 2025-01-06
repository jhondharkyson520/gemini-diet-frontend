import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/home";
import Begin from "./view/begin";
import Finish from "./view/finish";

function App() {  
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/begin" element={<Begin/>}/>
          <Route path="/finish" element={<Finish/>}/>
      </Routes>
    </Router>
    
  )
}

export default App;

