import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { Button } from 'semantic-ui-react';
import Table from './../components/Table';
import Menu from './../components/Menu';
import Actions from '../actions/creators';

import './../components/main.css';

const data = require('./../mockup/db.json');

class Main extends React.Component {

  componentDidMount() {
    // get data
    this.props.requestLast5Suppliers();
    this.props.requestLast5Products();
    this.props.requestProducts();
    this.props.requestSuppliers();
  }
  render() {
    const { last5Suppliers } = this.props;
    const { last5Products } = this.props;
    const last5SuppliersProperties = last5Suppliers.length > 0 ? Object.getOwnPropertyNames(last5Suppliers[0]) : [];
    const last5ProductsProperties = last5Products.length > 0 ? Object.getOwnPropertyNames(last5Products[0]) : [];

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
    return (
      <frag>
        <div className="container">
          <Menu menuItems={menuItems} pathname={this.props.pathname}/>
          <h1 style={{textAlign: 'center'}}>Last 5 Suppliers</h1>
          <Table data={last5Suppliers} headers={last5SuppliersProperties}/>
          <Link to={{pathname: '/suppliers'}}><Button floated="right">See all suppliers</Button></Link>
          <h1 style={{textAlign: 'center'}}>Last 5 Products</h1>
          <Table data={last5Products} headers={last5ProductsProperties}/>
          <Link to={{pathname: '/products'}}><Button floated="right">See all products</Button></Link>
        </div>
      </frag>
    );
  }
}

Main.propTypes = {
  pathname: PropTypes.string.isRequired,

  last5Suppliers: PropTypes.arrayOf(PropTypes.object),
  requestLast5Suppliers: PropTypes.func.isRequired,
  requestSuppliers: PropTypes.func.isRequired,
  suppliers: PropTypes.arrayOf(PropTypes.object),

  last5Products: PropTypes.arrayOf(PropTypes.object),
  requestLast5Products: PropTypes.func.isRequired,
  requestProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object),

};

const mapStateToProps = state => ({
  pathname: state.routing.locationBeforeTransitions.pathname,
  last5Suppliers: state.last5Suppliers.list,
  last5Products: state.last5Products.list,
  suppliers: state.suppliers.list
});

const mapDispatchToProps = dispatch => ({
  requestLast5Suppliers: () => dispatch(Actions.requestLast5Suppliers()),
  requestLast5Products: () => dispatch(Actions.requestLast5Products()),
  requestProducts: () => dispatch(Actions.requestProducts()),
  requestSuppliers: () => dispatch(Actions.requestSuppliers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

