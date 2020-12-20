import React, { Component } from 'react'

export class AddItems extends Component {
    //state starts as an empty document
    state = {
        id: '',
        buildings: '',
        boilers: '',
        name: '',
        email: '',
        contact: '',
        maintenanceHours: '' 
    };
    //Check if props had been changed
    componentDidUpdate(prevProps, prevState) {
        if (this.props.isEditing && this.props.isEditing !== prevProps.isEditing) {
            this.handleEdit(this.props.companyToEdit);
        }
    }

    handleEdit = (companyToEdit) => {
        this.setState({
            id: companyToEdit.id,
            buildings: companyToEdit.buildings,
            boilers: companyToEdit.boilers,
            name: companyToEdit.name,
            email: companyToEdit.email,
            contact: companyToEdit.contact,
            maintenanceHours: companyToEdit.maintenanceHours
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(this.props.isEditing) {
            this.props.editCompany(this.state);
        } else {
            this.props.AddItems(this.state);
        }
        
        return this.setState({
            id: '',
            buildings: '',
            boilers: '',
            name: '',
            email: '',
            contact: '',
            maintenanceHours: ''            
        });        
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });   
    render() {
        const { isEditing } = this.props 
        
        return (
            <form onSubmit={this.onSubmit}>
                <h3>{isEditing ? 'Edit Company' : 'Create new company'}</h3>
                <input 
                    type="text" 
                    name="id"
                    style={{flex: '10', padding: '5px', margin: '5px 0px'}} 
                    placeholder="ID..." 
                    value = {this.state.id}
                    onChange={this.onChange}
                />
                <input 
                    type="text" 
                    name="buildings"
                    style={{flex: '10', padding: '5px', margin: '10px 0px'}} 
                    placeholder="Buildings..." 
                    value = {this.state.buildings}
                    onChange={this.onChange}
                />
                <input 
                    type="text" 
                    name="boilers"
                    style={{flex: '10', padding: '5px', margin: '10px 0px'}} 
                    placeholder="Boilers..." 
                    value = {this.state.boilers}
                    onChange={this.onChange}
                />
                <input 
                    type="text" 
                    name="name"
                    style={{flex: '10', padding: '5px', margin: '10px 0px'}} 
                    placeholder="Name..." 
                    value = {this.state.name}
                    onChange={this.onChange}
                />
                <input 
                    type="text" 
                    name="email"
                    style={{flex: '10', padding: '5px', margin: '10px 0px'}} 
                    placeholder="Email..." 
                    value = {this.state.email}
                    onChange={this.onChange}
                />
                <input 
                    type="text" 
                    name="contact"
                    style={{flex: '10', padding: '5px', margin: '10px 0px'}} 
                    placeholder="Contact number..." 
                    value = {this.state.contact}
                    onChange={this.onChange}
                />
                <input 
                    type="text" 
                    name="maintenanceHours"
                    style={{flex: '10', padding: '5px', margin: '10px 0px'}} 
                    placeholder="Maintenance hours..." 
                    value = {this.state.maintenanceHours}
                    onChange={this.onChange}
                />                         
                <input 
                    type="submit" 
                    value="SUBMIT" 
                    className="btn"
                    style={{flex: '1', marginLeft: '5px'}}
                />               
                
            </form>
        )
    }
}

export default AddItems
