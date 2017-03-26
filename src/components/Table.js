import React, { PropTypes } from 'react';
import { Table, Button, Header, Icon, Modal } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Actions from '../actions/creators';

class TableComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(entry) {
    const { deleteSupplier, deleteProduct } = this.props;
    if (entry.address) {
      if (confirm('Are you sure you want to delete this supplier?')) {
        deleteSupplier(entry.id);
      }
    } else if (confirm('Are you sure you want to delete this product?')) {
      deleteProduct(entry.id);
    }
  }

  handleEdit(entry) {
    if (entry.address) {
      browserHistory.push(`/suppliers/edit/${entry.id}`);
    } else {
      browserHistory.push(`/products/edit/${entry.id}`);
    }
  }


  render() {
    const { data, headers } = this.props;
    headers[headers.length] = 'Options';
    const tableHeaders = headers.map((header, indexHeader) => {
      let newHeader = header;
      if (newHeader === 'fk_supplier') {
        newHeader = 'supplier';
      }
      return (<Table.HeaderCell key={indexHeader}>{newHeader.toUpperCase()}</Table.HeaderCell>);
    });
    const tableBody = data.map((row, indexRow) => (
      <Table.Row key={indexRow}>
        {
           headers.map((header, indexHeader) => (
             <Table.Cell key={indexHeader}>
               {header === 'id' && indexRow + 1}
               {(header !== 'Options' && header !== 'id' && header !== 'fk_supplier') && row[header]}
               {header === 'fk_supplier' &&
               this.props.suppliers.find(supp => supp.id === row.fk_supplier) &&
               this.props.suppliers.find(supp => supp.id === row.fk_supplier).name
               }
               {header === 'Options' &&
               <Button.Group>
                 <Button onClick={() => this.handleEdit(row)}>Edit</Button>
                 <Button.Or />
                 <Button negative onClick={() => this.handleDelete(row)}>Delete</Button>
               </Button.Group>
               }
             </Table.Cell>
           ))
        }
      </Table.Row>
    ));
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            {tableHeaders}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableBody}
        </Table.Body>
      </Table>
    );
  }
}

TableComponent.defaultProps = {
};

TableComponent.propTypes = {
  data: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
  deleteSupplier: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,

};

const mapDispatchToProps = dispatch => ({
  deleteSupplier: supplierId => dispatch(Actions.requestDeleteSuppliers(supplierId)),
  deleteProduct: productId => dispatch(Actions.requestDeleteProducts(productId)),
});

const mapStateToProps = state => ({
  suppliers: state.suppliers.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
