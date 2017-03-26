import React, {PropTypes} from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import Actions from '../actions/creators';

import './../components/main.css';

class SupplierForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      this.props.postSupplier(supplier);
      browserHistory.push('/suppliers');
    }
  }

  render() {
    return (
      <Form onSubmit={e => e.preventDefault()} inverted>
        <Form.Field >
          <Form.Input name="name" onChange={this.handleNameChange} placeholder="Name" label="Name" />
          <Form.Input name="address" onChange={this.handleAddressChange} placeholder="Address" label="Address" />
        </Form.Field>
        <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
      </Form>
    );
  }
}

SupplierForm.propTypes = {
  postSupplier: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  postSupplier: supplier => dispatch(Actions.requestAddSuppliers(supplier))
});


export default connect(null, mapDispatchToProps)(SupplierForm);
