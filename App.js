
import './App.css';
import React from "react";

import {BrowserRouter,Route, Link } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

function App() {
  const openmenu = () =>{
    document.querySelector(".sidebar").classList.add("open");

  }
  const closemenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");

  }
  return(
<BrowserRouter>      
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openmenu}>
                    &#9776;
                </button>
                <Link to="/">E-Wish</Link>
                
            </div>
            <div className="header-links">
                
                <a href="chat.html">Chat </a>
                <a href="faq.html">FAQ </a>
                <a href="darkmode.html">Dark mode</a>
                <a href="cart.html">Cart </a>
                <a href="signin.html">Signin </a>
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closemenu}>X</button>
            <ul>
                <li>
                    <a href="index.html">Clothing</a>
                </li>
                <li>
                    <a href="index.html">Accessories</a>
                </li>
            </ul>
        </aside>
        
        <main className="main">
            <div className="content">
                <Route path="product/:id"  component={ProductScreen} />   
                <Route path="/" exact= {true} component={HomeScreen} />
                
            </div>
            
        </main>
        <footer className="footer">All rights Reserved</footer>
    </div>
</BrowserRouter>
  );

  
}

export default App;
