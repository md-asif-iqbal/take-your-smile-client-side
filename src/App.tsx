import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Pages/shared/NavBar/NavBar';
import Banner from './Pages/Home/Banner/Banner';

function App() {
  return (
    <div className="relative">
      <NavBar/>
      <Banner/>
    </div>
  );
}

export default App;
