import React, { PropTypes } from 'react';
import ProductEditForm from './ProductEditForm';
import Menu from './../components/Menu';

import './../components/main.css';

export default class ProductEditScreen extends React.Component {

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
        <h1 style={{textAlign: 'center'}}>Edit Product</h1>
        <ProductEditForm />
      </div>
    );
  }
}

ProductEditScreen.propTypes = {
};
