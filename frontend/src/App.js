import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Movies from './containers/Movies';
import AddMovie from './components/AddMovie';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (  
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/" element={<Movies/>} />
        <Route path="/addmovie" element={<AddMovie/>} />
      </Routes>
      <Footer/>
    </React.Fragment>
  );
}
 
export default App;