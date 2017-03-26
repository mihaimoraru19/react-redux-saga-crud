import React, {PropTypes} from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Actions from '../actions/creators';

import './../components/main.css';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: '',
      price: '',
      description: '',
      fk_supplier: ''
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

  handleSupplierChange(event, props) {
    this.setState({fk_supplier: props.value});
  }


  handleSubmit() {
    if (this.state.name === '' || this.state.quantity === '' || this.state.price === '' || this.state.description === '' || this.state.fk_supplier === '') {
      alert('No item can be null!');
    } else if (this.validateNumber(this.state.quantity) == null || this.validateNumber(this.state.price) == null) {
      alert('Quantity and price MUST be numbers');
    } else {
      const product = this.state;
      this.props.postProduct(product);
      browserHistory.push('/products');
    }
  }

  render() {
    const options = this.props.suppliers.map(supp => ({
      key: supp.id,
      value: supp.id,
      text: supp.name
    }));
    return (
      <Form onSubmit={e => e.preventDefault()} inverted>
        <Form.Field >
          <Form.Input name="name" onChange={this.handleNameChange} placeholder="Name" label="Name" />
          <Form.Input name="quantity" onChange={this.handleQuantityChange} placeholder="Quantity" label="Quantity" />
          <Form.Input name="price" onChange={this.handlePriceChange} placeholder="Price" label="Price" />
          <Form.TextArea name="description" onChange={this.handleDescriptionChange} placeholder="Description" label="Description" />
          <Form.Select name="supplier" placeholder="Select supplier" value={this.state.fk_supplier} options={options} onChange={this.handleSupplierChange} />
        </Form.Field>
        <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
      </Form>
    );
  }
}

ProductForm.propTypes = {
  postProduct: PropTypes.func.isRequired,
  requestSuppliers: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  postProduct: product => dispatch(Actions.requestAddProducts(product)),
  requestSuppliers: () => dispatch(Actions.requestSuppliers())
});

const mapStateToProps = state => ({
  suppliers: state.suppliers.list
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
