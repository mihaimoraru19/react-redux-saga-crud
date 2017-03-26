import React, { PropTypes } from 'react';
import ProductForm from './ProductForm';
import Menu from './../components/Menu';

import './../components/main.css';

export default class ProductAddScreen extends React.Component {

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
        <h1 style={{textAlign: 'center'}}>Add Product</h1>
        <ProductForm />
      </div>
    );
  }
}

ProductAddScreen.propTypes = {
};
