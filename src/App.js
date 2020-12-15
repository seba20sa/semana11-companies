import React, { Component } from 'react';
import CompaniesList from './components/Companies'
import companiesMock from './mocks/companies.json'
// import { render } from 'react-dom';
import Header from  './components/layout/Header';
// import listItems from './components/listItems';
import AddItems from './components/AddItems';



import './App.css'

class App extends Component {
// state of mocks has to be called from mocks folder
state = {companiesMock}
//Delete metod returns the documents by leaving out the one selected by ID.
DeleteItem = (id) => {
  this.setState({companiesMock: [...this.state.companiesMock.filter(company => company.id !== id)]})
}

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
  this.setState({ companiesMock: [...this.state.companiesMock, newCompany] })
}

//components returned the show function takes the mock state
  render() {      
      return (
       <div className="App">
       <Header />
       <
        CompaniesList companiesMock={this.state.companiesMock} 
        DeleteItem = {this.DeleteItem}
       />       
       <AddItems AddItems={this.AddItems} />       
       
       </div>
            
      );
  }
}
export default App;

