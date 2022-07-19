import React from 'react';
import Home from './Pages/Home/Home/Home';
import NavBar from './Pages/shared/NavBar/NavBar';
function App() {
  return (
    <div className="relative bg-red">
      <NavBar/>
      <Home></Home>
    </div>
  );
}

export default App;
