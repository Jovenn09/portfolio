import React from 'react';
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <div id="content">
        <div className="content-container">
          <Home />
          <Work />
          <Education />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;