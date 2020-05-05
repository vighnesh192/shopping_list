import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import About from './components/pages/About';
import ShoppingList from './components/ShoppingList';



function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ShoppingList} />
      
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
