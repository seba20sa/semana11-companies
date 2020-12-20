import React, { Component} from 'react';
import CompanyItem from './CompanyItem';
//"Tech"

// takes params and renders them. add key values (companies' id)
class CompaniesList extends Component {
    render() {        
        return this.props.companiesMock.map((companies) => (
            <CompanyItem
                key={companies.id}
                companies={companies} 
                DeleteItem = {this.props.DeleteItem}
                handleEdit={this.props.handleEdit}
            />    
        ));
    }
}


export default CompaniesList;