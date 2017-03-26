/* eslint-disable import/newline-after-import */
/* Combine all available reducers to a single root reducer.
 *
 */
/* Populated by react-webpack-redux:reducer */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import SupplierReducer from './supplierReducer';
import SupplierLast5Reducer from './supplierLast5Reducer';

import ProductReducer from './productReducer';
import ProductLast5Reducer from './productLast5Reducer';

import supplier from './supplier';
import product from './product';


const combined = combineReducers(
  {
    routing: routerReducer,
    suppliers: SupplierReducer,
    last5Suppliers: SupplierLast5Reducer,
    products: ProductReducer,
    last5Products: ProductLast5Reducer,
    supplier,
    product,
  }
);

module.exports = combined;
