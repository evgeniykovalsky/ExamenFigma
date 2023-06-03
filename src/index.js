import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Context from './components/Context';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
    <App />
    </Context>
  </React.StrictMode>
);

