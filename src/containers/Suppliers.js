import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'semantic-ui-react';
import {Link} from 'react-router';
import Table from './../components/Table';
import Menu from './../components/Menu';
import Actions from '../actions/creators';

import './../components/main.css';


class Suppliers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // get data
    this.props.requestSuppliers();
  }

  handleChange(event) {
    this.setState({searchString: event.target.value});
  }

  render() {
    const { searchString } = this.state;
    const { suppliers } = this.props;
    const supplierProperties = suppliers.length > 0 ? Object.getOwnPropertyNames(suppliers[0]) : [];
    const menuItems = [
      {
        name: 'Dashboard',
        pathname: '/',
      },
      {
        name: 'Products',
        pathname: '/products',
      },
      {
        name: 'Suppliers',
        pathname: '/suppliers',
      }
    ];
    const suppliersFiltered = suppliers.filter(supp => supp.name.toLowerCase().indexOf(searchString) > -1);
    return (
      <div className="container">
        <Menu menuItems={menuItems} pathname={this.props.pathname}/>
        <h1 style={{textAlign: 'center'}}>Suppliers</h1>
        <Link to={{pathname: '/suppliers/addSupplier'}}><Button floated="left">ADD</Button></Link>
        <Input onChange={this.handleChange} focus placeholder="Search..." />
        {suppliersFiltered.length !== 0 ? <Table data={suppliersFiltered} headers={supplierProperties}/> : <h3>There is no supplier to display.</h3> }
      </div>
    );
  }
}

Suppliers.propTypes = {
  pathname: PropTypes.string.isRequired,
  suppliers: PropTypes.arrayOf(PropTypes.object).isRequired,
  requestSuppliers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  pathname: state.routing.locationBeforeTransitions.pathname,
  suppliers: state.suppliers.list
});

const mapDispatchToProps = dispatch => ({
  requestSuppliers: () => dispatch(Actions.requestSuppliers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Suppliers);

