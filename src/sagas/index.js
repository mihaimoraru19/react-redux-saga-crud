import { takeLatest } from 'redux-saga/effects';
import API from './/../services/api';
import Types from './../actions/types';

import { getSuppliers, getLast5Suppliers, addSuppliers, updateSuppliers, deleteSupplier, getSupplier } from './SuppliersSaga';
import { getProducts, getLast5Products, addProducts, updateProducts, deleteProduct, getProduct } from './ProductsSaga';


// Create our API at this level and feed it into
// the sagas that are expected to make API calls
// so there's only 1 copy app-wide!
// const api = API.create()
const api = API.create();

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield [
    // some sagas only receive an action
    takeLatest(Types.SUPPLIERS_REQUEST, getSuppliers, api),
    takeLatest(Types.SUPPLIERS_LAST5_REQUEST, getLast5Suppliers, api),
    takeLatest(Types.SUPPLIERS_ADD_REQUEST, addSuppliers, api),
    takeLatest(Types.SUPPLIERS_UPDATE_REQUEST, updateSuppliers, api),
    takeLatest(Types.SUPPLIERS_DELETE_REQUEST, deleteSupplier, api),
    takeLatest(Types.SUPPLIER_REQUEST, getSupplier, api),

    takeLatest(Types.PRODUCTS_REQUEST, getProducts, api),
    takeLatest(Types.PRODUCTS_LAST5_REQUEST, getLast5Products, api),
    takeLatest(Types.PRODUCTS_ADD_REQUEST, addProducts, api),
    takeLatest(Types.PRODUCTS_UPDATE_REQUEST, updateProducts, api),
    takeLatest(Types.PRODUCTS_DELETE_REQUEST, deleteProduct, api),
    takeLatest(Types.PRODUCT_REQUEST, getProduct, api),

  ];
}
