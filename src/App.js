import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { HomeScreen } from './screens/homeScreen';
import { PricingScreen } from './screens/pricingScreen';
import { ProductsScreen } from './screens/productsScreen/ProductsScreen';
import { SupportScreen } from './screens/supportScreen';
import { ContactusScreen } from './screens/contactusScreen';


function App() {
  return (
    <div>
      <HomeScreen />
      <ProductsScreen/>
      <PricingScreen/>
      <SupportScreen/>
      <ContactusScreen/>
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
