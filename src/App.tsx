import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/home";
import Begin from "./view/begin";
import Finish from "./view/finish";
import Result from "./view/result";

function App() {  
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/begin" element={<Begin/>}/>
          <Route path="/finish" element={<Finish/>}/>
          <Route path="/result" element={<Result/>}/>
      </Routes>
    </Router>
    
  )
}

export default App;

