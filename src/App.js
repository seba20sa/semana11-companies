import React, { Component } from 'react';
import { render } from 'react-dom';
// import Header from  './components/layout/Header';
import listItems from './components/listItems';
// import addItems from './components/addItems';
// import deleteItems from './components/deleteItems';
// import updateItems from './components/updateItems';

// import uuid from 'uuid';

import './App.css'

class App extends Component {
// state of mocks has to be called with router from mocks folder
{
  companies: [
    {
      "buildings": ["building 1", "unique towers", "white castle"],
      "boilers": ["a2343", "b2345"],
      "name": "Wolff, Heidenreich and Heller",
      "email": "lhayer0@reuters.com",
      "contact": 4097416582,
      "maintenanceHours": 79,    
  },
  {
      "buildings": [ "renault towers"],
      "boilers": ["d43", "d96"],
      "name": "Buildings INC",
      "email": "notiene@reuters.com",
      "contact": 3238772355,
      "maintenanceHours": 49,    
  }
    
  ]
}





  render() {      
      return (
       <>
       //components returned

       </>
            
      );
  }
}
export default App;

