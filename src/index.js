import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import ShadeSlideShow from './components/ShadeSlideShow'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import "react-image-gallery/styles/css/image-gallery.css";
import FullShadeInstalledGallery from './components/FullShadeInstalledGallery';
import Shade from './components/Shade.jsx';
import ShadeContainer from './containers/ShadeAdsContainer';
import Contact from './components/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/FullShadeInstalledGallery' element={<FullShadeInstalledGallery />} />
    <Route path='/Awning' element={<ShadeContainer />} />
    <Route path='/purchase' element={<Contact title="Contact" contact={{email: "jackisbusy@gmail.com", phone: "520-730-7020"}}/>} />
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
