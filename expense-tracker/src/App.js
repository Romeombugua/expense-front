import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Sooner from './components/Sooner';




const App = () => 
    (
        <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<About/>} />
                    <Route path="/sooner" exact element={<Sooner/>} />
                </Routes>
        </BrowserRouter>
  )

export default App