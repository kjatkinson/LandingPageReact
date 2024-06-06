import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './component/home.jsx'; // Ensure path is correct
import PicGrid from './PicGrid'; // Add the new PicGrid component

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <PicGrid /> {/* Insert the photo grid here */}
      <Footer/>
    </div>
  );
}

export default App;
