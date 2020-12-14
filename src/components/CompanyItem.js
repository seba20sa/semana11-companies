import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CompaniesList from './Companies';

// 
class CompanyItem extends Component {
    render() {
        return (
            <div style={CompanyItemStyle}>
                <p>Id: {this.props.companies.id}</p>
                <p>Name: {this.props.companies.name}</p>
                <p>Buildings: {this.props.companies.buildings}</p>
                <p>Boilers: {this.props.companies.boilers}</p>
                <p>Email: {this.props.companies.email}</p>
                <p>Contact: {this.props.companies.contact}</p>
                <p>Maintenance hours: {this.props.companies.maintenanceHours}</p>
            </div>
        )
    }
}
const CompanyItemStyle = {
    background: '#f12354',
    color: 'blue',
    textAlign: 'center',
    padding: '10px'

}
CompanyItem.propTypes = {
    companies: PropTypes.object.isRequired
}

export default CompanyItem