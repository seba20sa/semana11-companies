import React, { Component} from 'react';
import CompanyItem from './CompanyItem';
import PropTypes from 'prop-types';

// takes params and renders them. add key values (companies' id)
class CompaniesList extends Component {
    render() {        
        return this.props.companiesMock.map((companies) => (
            <CompanyItem key={companies.id} companies={companies} />    
        ));
    }
}
//propType fro companies
CompaniesList.propTypes = {
    companies : PropTypes.array.isRequired
}

export default CompaniesList;