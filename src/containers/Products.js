import React, { PropTypes } from 'react';
import { Button, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import Table from './../components/Table';
import Menu from './../components/Menu';
import Actions from '../actions/creators';


import './../components/main.css';


class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // get data
    this.props.requestProducts();
  }

  handleChange(event) {
    this.setState({searchString: event.target.value});
  }

  render() {
    const { searchString } = this.state;
    const { products } = this.props;
    const productProperties = products.length > 0 ? Object.getOwnPropertyNames(products[0]) : [];
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
    const productsFiltered = products.filter(prod => prod.name.toLowerCase().indexOf(searchString) > -1);
    return (
      <div className="container">
        <Menu menuItems={menuItems} pathname={this.props.pathname}/>
        <h1 style={{textAlign: 'center'}}>Products</h1>
        <Link to={{pathname: '/products/addProduct'}}><Button floated="left">ADD</Button></Link>
        <Input onChange={this.handleChange} focus placeholder="Search..." />
        {productsFiltered.length !== 0 ? <Table data={productsFiltered} headers={productProperties}/> : <h3>There is no product to display.</h3> }
      </div>
    );
  }
}

Products.propTypes = {
  pathname: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  requestProducts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pathname: state.routing.locationBeforeTransitions.pathname,
  products: state.products.list
});

const mapDispatchToProps = dispatch => ({
  requestProducts: () => dispatch(Actions.requestProducts()),
  requestSuppliers: () => dispatch(Actions.requestSuppliers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
