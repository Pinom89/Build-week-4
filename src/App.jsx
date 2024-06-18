import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Profile from './Components/Profile';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  const token=import.meta.env.VITE_TOKEN_AUTORIZZAZIONE;
  console.log(token);

  return (
    <>
      <Navbar></Navbar>
      <Home />
    </>
  );
};

export default App;
