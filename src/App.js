import React, { Component } from 'react';
import CompaniesList from './components/Companies'
import companiesMock from './mocks/companies.json'
// import { render } from 'react-dom';
import Header from  './components/layout/Header';
// import listItems from './components/listItems';
import AddItems from './components/AddItems';
// import deleteItems from './components/deleteItems';
// import updateItems from './components/updateItems';



import './App.css'

class App extends Component {
// state of mocks has to be called from mocks folder
state = {companiesMock}


//Add method returns newCompany and sets its state according to the imputs. 
AddItems = ({ id, buildings, boilers, name, email, contact, maintenanceHours }) => {
  const newCompany = {
    id,
    buildings,
    boilers,
    name,
    email,
    contact,
    maintenanceHours
  }
  this.setState({ companiesMock: [...this.state.companiesMock], newCompany })
}

//components returned the show function takes the mock state
  render() {      
      return (
       <div className="App">
       <Header />
       <AddItems AddItems={this.AddItems} />

       <CompaniesList companiesMock={this.state.companiesMock} />
       
       </div>
            
      );
  }
}
export default App;

