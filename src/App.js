import React, { Component } from 'react';
import CompaniesList from './components/Companies'
// import { render } from 'react-dom';
import Header from  './components/layout/Header';
// import listItems from './components/listItems';
// import addItems from './components/addItems';
// import deleteItems from './components/deleteItems';
// import updateItems from './components/updateItems';



import './App.css'

class App extends Component {
// state of mocks has to be called with router from mocks folder
state = {
  companies: [
      { "id": 1,
        "buildings": ["building 1", "unique towers", "white castle"],
        "boilers": ["a2343", "b2345"],
        "name": "Wolff, Heidenreich and Heller",
        "email": "lhayer0@reuters.com",
        "contact": 4097416582,
        "maintenanceHours": 79,    
    },
    {   "id": 2,
        "buildings": [ "renault towers"],
        "boilers": ["d43", "d96"],
        "name": "Buildings INC",
        "email": "notiene@reuters.com",
        "contact": 3238772355,
        "maintenanceHours": 49,    
    }
    
  ]
}
//components returned
  render() {      
      return (
       <div className="App">
       <Header />         
       <CompaniesList companies={this.state.companies} />
       </div>
            
      );
  }
}
export default App;

