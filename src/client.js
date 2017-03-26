import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Main from './containers/Main';
import Suppliers from './containers/Suppliers';
import Products from './containers/Products';
import SupplierAddScreen from './components/SupplierAddScreen';
import ProductAddScreen from './components/ProductAddScreen';
import configureStore from './stores';
import SupplierEditScreen from './components/SupplierEditScreen';
import ProductEditScreen from './components/ProductEditScreen';
import Table from './components/Table';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Main} />
        <Route path="/products" component={Products} />
        <Route path="/suppliers" component={Suppliers} />
        <Route path="/suppliers/addSupplier" name="AddSupplier" component={SupplierAddScreen} />
        <Route path="/products/addProduct" name="AddProduct" component={ProductAddScreen} />
        <Route path="/suppliers/edit/:supplierId" name="EditSupplier" component={SupplierEditScreen} />
        <Route path="/products/edit/:productId" name="EditProduct" component={ProductEditScreen} />
        <Route path="/suppliers/:supplierId" name="DeleteSupp" component={SupplierEditScreen} />
        <Route path="/products/:productId" name="DeleteProd" component={SupplierEditScreen} />
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);
