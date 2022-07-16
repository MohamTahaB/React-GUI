import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tab from './components/Tab';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/welcome' />
        </Routes>
      </Router> 
      <Tab/>
    </div>
  );
}

export default App;
