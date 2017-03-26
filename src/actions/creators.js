import Types from './types';

const requestSuppliers = () => ({ type: Types.SUPPLIERS_REQUEST });
const receiveSuppliers = suppliers => ({ type: Types.SUPPLIERS_RECEIVE, suppliers });

const requestLast5Suppliers = () => ({ type: Types.SUPPLIERS_LAST5_REQUEST });
const receiveLast5Suppliers = last5Suppliers => ({ type: Types.SUPPLIERS_LAST5_RECEIVE, last5Suppliers });

const requestAddSuppliers = newSupplier => ({ type: Types.SUPPLIERS_ADD_REQUEST, newSupplier });
const receiveAddSuppliers = addedSupplier => ({ type: Types.SUPPLIERS_ADD_RECEIVE, addedSupplier });

const requestUpdateSuppliers = (updatedSupplier, supplierId) => ({ type: Types.SUPPLIERS_UPDATE_REQUEST, updatedSupplier, supplierId });
const receiveUpdateSuppliers = updatedSupplier => ({ type: Types.SUPPLIERS_UPDATE_RECEIVE, updatedSupplier });

const requestDeleteSuppliers = supplierId => ({ type: Types.SUPPLIERS_DELETE_REQUEST, supplierId });
const receiveDeleteSuppliers = deletedSupplier => ({ type: Types.SUPPLIERS_DELETE_RECEIVE, deletedSupplier });

const requestSupplier = supplierId => ({ type: Types.SUPPLIER_REQUEST, supplierId});
const receiveSupplier = supplier => ({ type: Types.SUPPLIER_RECEIVE, supplier});


const requestProducts = () => ({ type: Types.PRODUCTS_REQUEST });
const receiveProducts = products => ({ type: Types.PRODUCTS_RECEIVE, products });

const requestLast5Products = () => ({ type: Types.PRODUCTS_LAST5_REQUEST });
const receiveLast5Products = last5Products => ({ type: Types.PRODUCTS_LAST5_RECEIVE, last5Products });

const requestAddProducts = newProduct => ({ type: Types.PRODUCTS_ADD_REQUEST, newProduct });
const receiveAddProducts = addedProduct => ({ type: Types.PRODUCTS_ADD_RECEIVE, addedProduct });

const requestUpdateProducts = (updateProduct, productId) => ({ type: Types.PRODUCTS_UPDATE_REQUEST, updateProduct, productId });
const receiveUpdateProducts = updatedProduct => ({ type: Types.PRODUCTS_UPDATE_RECEIVE, updatedProduct });

const requestDeleteProducts = productId => ({ type: Types.PRODUCTS_DELETE_REQUEST, productId });
const receiveDeleteProducts = deletedProduct => ({ type: Types.PRODUCTS_DELETE_RECEIVE, deletedProduct });

const requestProduct = productId => ({ type: Types.PRODUCT_REQUEST, productId});
const receiveProduct = product => ({ type: Types.PRODUCT_RECEIVE, product});

/**
 Makes available all the action creators we've created.
 */
export default {
  requestSuppliers,
  receiveSuppliers,
  requestLast5Suppliers,
  receiveLast5Suppliers,
  requestAddSuppliers,
  receiveAddSuppliers,
  requestUpdateSuppliers,
  receiveUpdateSuppliers,
  requestDeleteSuppliers,
  receiveDeleteSuppliers,
  requestSupplier,
  receiveSupplier,

  requestProducts,
  receiveProducts,
  requestLast5Products,
  receiveLast5Products,
  requestAddProducts,
  receiveAddProducts,
  requestUpdateProducts,
  receiveUpdateProducts,
  requestDeleteProducts,
  receiveDeleteProducts,
  requestProduct,
  receiveProduct,
};

