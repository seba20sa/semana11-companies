import React, { Component } from 'react';
// import PropTypes from 'prop-types';


// 
export class CompanyItem extends Component {
    render() {
        //
        // const {id} = this.props.companies;
        return (
            <div style={CompanyItemStyle}>
                <p>Id: {this.props.companies.id}</p>                
                <p>Buildings: {this.props.companies.buildings}</p>
                <p>Boilers: {this.props.companies.boilers}</p>
                <p>Name: {this.props.companies.name}</p>
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
    textAlign: 'justify',
    padding: '10px'

}
// CompanyItem.propTypes = {
//     companies: PropTypes.object.isRequired
// }

export default CompanyItem