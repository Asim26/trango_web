import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { HomeScreen } from './screens/homeScreen';
import { PricingScreen } from './screens/pricingScreen';
import { ProductsScreen } from './screens/productsScreen/ProductsScreen';
import { SupportScreen } from './screens/supportScreen';
import { ContactusScreen } from './screens/contactusScreen';

import { Header } from './components/header'

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
          <Route path="/" exact component= {HomeScreen} />
          <Route path="/pricing" component= {PricingScreen} />
          <Route path="/products" component= {ProductsScreen} />
          <Route path="/support" component= {SupportScreen} />
          <Route path="/contactUs" component= {ContactusScreen} />
      </BrowserRouter>
       
      {/* <HomeScreen />
      <ProductsScreen/>
      <PricingScreen/>
      <SupportScreen/>
      <ContactusScreen/> */}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       React Basic tutorial by Syed Shah Faisal  
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
