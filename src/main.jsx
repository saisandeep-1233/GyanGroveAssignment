import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';  
import '@fortawesome/fontawesome-free/css/all.css';
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);
import { BrowserRouter } from 'react-router-dom';

import Parent from './components/Parent.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Parent />
    </BrowserRouter>
  </React.StrictMode>
)
