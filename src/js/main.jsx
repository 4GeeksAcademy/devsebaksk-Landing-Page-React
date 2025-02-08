import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import NavBar from './components/NavBar';
import Jumbotron from './components/JumboTron';
import CardGroup from './components/Card';
import Footer from './components/Footer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <div className='container'>
    <Jumbotron/>
    <CardGroup/>
    </div>
  <Footer></Footer>

  </React.StrictMode>,
);
