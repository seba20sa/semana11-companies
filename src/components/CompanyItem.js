import React, { Component } from 'react';

import PropTypes from 'prop-types';


// 
export class CompanyItem extends Component {
    render() {
        //call by id for delete and update
        const {id} = this.props.companies;
        return (
            <div style={CompanyItemStyle}>
                <button className="btn" onClick={this.props.DeleteItem.bind(this, id)}>x </button>
                <ul className="list">
                    <li>Id: {this.props.companies.id}</li>
                    <li>Buildings: {this.props.companies.buildings}</li>
                    <li>Boilers: {this.props.companies.boilers}</li>
                    <li>Name: {this.props.companies.name}</li>
                    <li>Email: {this.props.companies.email}</li>
                    <li>Contact: {this.props.companies.contact}</li>
                    <li>Maintenance hours: {this.props.companies.maintenanceHours}</li>                    
                </ul>
                

            </div>
        )
    }
}
const CompanyItemStyle = {        
    background: '#f12354',
    color: 'blue',
    textAlign: 'justify',
    padding: '10px'

}
// CompanyItem.propTypes = {
//     companies: PropTypes.object.isRequired
// }

export default CompanyItem