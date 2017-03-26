import React, { PropTypes } from 'react';
import SupplierForm from './SupplierForm';
import Menu from './../components/Menu';

import './../components/main.css';

export default class SupplierAddScreen extends React.Component {

  render() {
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
      <div className="container">
        <Menu menuItems={menuItems} pathname={this.props.pathname}/>
        <h1 style={{textAlign: 'center'}}>Add Supplier</h1>
        <SupplierForm />
      </div>
    );
  }
}

SupplierAddScreen.propTypes = {
};
