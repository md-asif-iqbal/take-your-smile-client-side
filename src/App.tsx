import React from 'react';
import Home from './Pages/Home/Home/Home';
import NavBar from './Pages/shared/NavBar/NavBar';

import Banner from './Pages/Home/Banner/Banner';


function App() {
  return (
    <div className="relative">
      <NavBar/>

      <Banner/>
      <Home></Home>

    </div>
  );
}

export default App;
