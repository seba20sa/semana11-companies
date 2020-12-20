import React, { Component } from 'react';
import CompaniesList from './components/Companies'
import companiesMock from './mocks/companies.json'
// import { render } from 'react-dom';
import Header from  './components/layout/Header';
// import listItems from './components/listItems';
import AddItems from './components/AddItems';



import './App.css'

class App extends Component {
// state of mocks has to be called from mocks folder include props for the update method
state = {
  companiesMock,
  isEditing: false,
  companyToEdit: {}
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

// edit method 
editCompany = (company) => {
  this.setState({
    companiesMock: this.state.companiesMock.map (element => {
      if (element.id === company.id) {
        element.id = company.id 
        element.buildings = company.buildings
        element.boilers = company.boilers
        element.name = company.name
        element.email = company.email
        element.contact = company.contact
        element.maintenanceHours = company.maintenanceHours
      }
      return element;
    }),
    companyToEdit: {},
    isEditing: false
  })
};


//Delete metod returns the documents by leaving out the one selected by ID.
DeleteItem = (id) => {
  this.setState({companiesMock: [...this.state.companiesMock.filter(company => company.id !== id)]})
}

handleEdit = (company) => {
  this.setState({
    isEditing: !this.state.isEditing,
    companyToEdit: company
  })
}

//components returned the show function takes the mock state
  render() {      
      return (
       <div className="App">
       <Header />
       <CompaniesList
          companiesMock={this.state.companiesMock} 
          DeleteItem = {this.DeleteItem}
          handleEdit = {this.handleEdit}
       />       
       <AddItems
          AddItems={this.AddItems}
          editCompany = {this.editCompany}
          isEditing={this.state.isEditing}
          companyToEdit={this.state.companyToEdit}        
        />
       </div>            
      );
  }
}
export default App;

