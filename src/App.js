// import logo from './logo.svg';
// import './App.css';
//import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Clip from './pages/Clip';
import Home from './pages/Home';

function App() {
 // const [keyword, setKeyword] = useState(""); 
  return (

    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clip" element={<Clip />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
