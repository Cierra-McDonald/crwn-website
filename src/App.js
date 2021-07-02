import React, { useState } from 'react'
import NavBar from './components/navbar/NavBar'
import GlobalStyle from './globalStyling';
import Dropdown from './components/dropdown/Dropdown'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/about/About'
import ProductsPage from './components/products/ProductsPage';
import HomePage from '../src/pages/HomePage'

function App() {
  const[ isOpen, setIsOpen ] = useState(false);

  const toggle = () => { 
    setIsOpen(!isOpen)
  }



  return (
    <>
      <GlobalStyle/>
        <NavBar 
          toggle={toggle}/>
        <Dropdown 
          isOpen={isOpen} 
          toggle={toggle}/>
          <Router>
            <Switch>
              <Route
                path="/products"
                exact
                component={ProductsPage}
              />
              <Route
                path="/"
                exact
                component={HomePage}
                />
              <Route
                path="/about"
                exact
                component={About}
                />
            </Switch>
        </Router>
    </>
  );
}

export default App;
