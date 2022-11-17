import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import About from "./pages/About/About";
const App = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/about' element={<About />} />
            </Routes>
        </Router>
    </>
  )
};

export default App;
