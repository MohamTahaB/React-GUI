import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tab from './components/Tab';
import SecondTable from './components/secondTable'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/welcome' />
        </Routes>
      </Router>
      <SecondTable />
    </div>
  );
}

export default App;
