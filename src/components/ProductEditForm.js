import React, {PropTypes} from 'react';
import { Form} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Actions from '../actions/creators';

import './../components/main.css';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.product.id,
      name: this.props.product.name,
      quantity: this.props.product.quantity,
      price: this.props.product.price,
      description: this.props.product.description,
      fk_supplier: this.props.product.fk_supplier
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSupplierChange = this.handleSupplierChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateNumber = this.validateNumber.bind(this);
  }

  componentDidMount() {
    // get data
    this.props.requestSuppliers();
    const id = location.pathname.substring(15, location.pathname.length);
    this.props.requestProduct(id);
  }

  componentWillReceiveProps(nextProps) {
    this.initialize(nextProps);
  }


  initialize(nextProps) {
    const product = nextProps.product;
    this.state = ({
      id: product.id,
      name: product.name,
      quantity: product.quantity,
      price: product.price,
      description: product.description,
      fk_supplier: product.fk_supplier
    });
  }

  validateNumber(value) {
    const regex = '^([1-9][0-9]*|0)$';
    return String(value).match(regex);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleQuantityChange(event) {
    this.setState({quantity: event.target.value});
  }

  handlePriceChange(event) {
    this.setState({price: event.target.value});
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  handleSupplierChange(event) {
    this.setState({fk_supplier: event.target.value});
  }

  handleSubmit() {
    if (this.state.name === '' || this.state.quantity === '' || this.state.price === '' || this.state.description === '' || this.state.fk_supplier === '') {
      alert('No item can be null!');
    } else if (this.validateNumber(this.state.quantity) == null || this.validateNumber(this.state.price) == null) {
      alert('Quantity and price MUST be numbers');
    } else {
      const product = this.state;
      const id = this.props.product.id;
      this.props.updateProduct(product, id);
      browserHistory.push('/products');
    }
  }

  render() {
    const options = this.props.suppliers.map(supp => ({
      key: supp.id,
      value: supp.id,
      text: supp.name
    }));
    if (!this.state.name) return <h3>Loading...</h3>;
    return (
      <Form onSubmit={e => e.preventDefault()} inverted>
        <Form.Field >
          <Form.Input name="name" onChange={this.handleNameChange} value={this.state.name} label="Name" />
          <Form.Input name="quantity" onChange={this.handleQuantityChange} value={this.state.quantity} label="Quantity" />
          <Form.Input name="price" onChange={this.handlePriceChange} value={this.state.price} label="Price" />
          <Form.TextArea name="description" onChange={this.handleDescriptionChange} value={this.state.description} label="Description" />
          <Form.Select name="supplier" placeholder="Select supplier" value={this.state.fk_supplier} options={options} onChange={this.handleSupplierChange} />
        </Form.Field>
        <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
      </Form>
    );
  }
}

ProductForm.propTypes = {
  updateProduct: PropTypes.func.isRequired,
  requestSuppliers: PropTypes.func.isRequired,
  requestProduct: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  updateProduct: (product, id) => dispatch(Actions.requestUpdateProducts(product, id)),
  requestSuppliers: () => dispatch(Actions.requestSuppliers()),
  requestProduct: productId => dispatch(Actions.requestProduct(productId))
});

const mapStateToProps = state => ({
  suppliers: state.suppliers.list,
  product: state.product.product
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
