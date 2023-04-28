import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Donde from './paginas/donde'
import Productos from './paginas/productos'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detalle from './paginas/detalleProd';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/donde" element={<Donde/>}/>
          <Route path="/productos" element={<Productos/>}/>
          <Route path="/test" element={<h1>TEST</h1>}/>
          <Route path="/productos/:id" element={<Detalle/>} />
          <Route path="*" element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
