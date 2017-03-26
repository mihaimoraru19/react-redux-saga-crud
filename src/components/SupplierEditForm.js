import React, {PropTypes} from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Actions from '../actions/creators';

import './../components/main.css';

class SupplierForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.supplier.id,
      name: this.props.supplier.name,
      address: this.props.supplier.address,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // get data
    const id = location.pathname.substring(16, location.pathname.length);
    this.props.requestSupplier(id);
  }

  componentWillReceiveProps(nextProps) {
    this.initialize(nextProps);
  }

  initialize(nextProps) {
    const supplier = nextProps.supplier;
    this.state = {
      id: supplier.id,
      name: supplier.name,
      address: supplier.address
    };
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleAddressChange(event) {
    this.setState({address: event.target.value});
  }

  handleSubmit() {
    if (this.state.name === '' || this.state.address === '') {
      alert('Name or Address cannot be null!');
    } else {
      const supplier = this.state;
      const id = location.pathname.substring(16, location.pathname.length);
      this.props.updateSupplier(supplier, id);
      browserHistory.push('/suppliers');
    }
  }

  render() {
    if (!this.state.name) return <h3>Loading...</h3>;
    return (
      <Form onSubmit={e => e.preventDefault()} inverted>
        <Form.Field >
          <Form.Input name="name" onChange={this.handleNameChange} value={this.state.name} label="Name" />
          <Form.Input name="address" onChange={this.handleAddressChange} value={this.state.address} label="Address" />
        </Form.Field>
        <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
      </Form>
    );
  }
}

SupplierForm.propTypes = {
  updateSupplier: PropTypes.func.isRequired,
  requestSupplier: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  updateSupplier: (supplier, id) => dispatch(Actions.requestUpdateSuppliers(supplier, id)),
  requestSupplier: supplierId => dispatch(Actions.requestSupplier(supplierId)),
});

const mapStateToProps = state => ({
  supplier: state.supplier.supplier
});


export default connect(mapStateToProps, mapDispatchToProps)(SupplierForm);
