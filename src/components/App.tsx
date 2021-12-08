import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from './Navigation';
import Slider from './Slider';
import AppToDo from './AppToDo';
import Stoper from './Stoper'
import Pokemon from './Pokemon'
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navigation />
      <Routes> 
        <Route path='/slider' element={<Slider />} />
        <Route path="/apptodo" element={<AppToDo />} />
        <Route path="/stoper" element={<Stoper />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
