import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Perfil from './Perfil';
import Agenda from './Agenda';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Perfil/>
    <Agenda/>  
  </React.StrictMode>,
  document.getElementById('root')
);