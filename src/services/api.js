// a library to wrap and simplify api calls
import apisauce from 'apisauce';

// our "constructor"
const create = (baseURL = 'http://localhost:8080') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
    },
    // 10 second timeout...
    timeout: 10240
  });

  // Get all suppliers
  // http://localhost:8080/suppliers
  // http://localhost:8080/products
  const getAllSuppliers = () => api.get('/suppliers');
  const getAllProducts = () => api.get('/products');

  // Get last 5 suppliers
  // http://localhost:8080/suppliers?_sort=views&_order=DESC&_limit=5
  // http://localhost:8080/products?_sort=views&_order=DESC&_limit=5
  const getLast5Suppliers = () => api.get('/suppliers/last5Supp');
  const getLast5Products = () => api.get('/products/last5Prod');

  // Get only one supplier
  // Get only one product
  const getSupplier = supplierId => api.get(`/suppliers/${supplierId}`, supplierId);
  const getProduct = productId => api.get(`/products/${productId}`, productId);

  // Add supplier
  // http://localhost:8080/suppliers
  // http://localhost:8080/products
  const addSuppliers = newSupplier => api.post('/suppliers/addSupplier', newSupplier);
  const addProducts = newProduct => api.post('/products/addProduct', newProduct);

  // Update supplier
  // http://localhost:8080/suppliers/id
  // http://localhost:8080/products/id
  const updateSupplier = (newSupplier, supplierId) => api.put(`/suppliers/edit/${supplierId}`, newSupplier);
  const updateProduct = (newProduct, productId) => api.put(`/products/edit/${productId}`, newProduct);

  // Delete supplier
  // http://localhost:8080/suppliers
  // http://localhost:8080/products
  const deleteSupplier = supplierId => api.delete(`/suppliers/${supplierId}`);
  const deleteProduct = productId => api.delete(`/products/${productId}`);

  //
  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getAllSuppliers,
    getLast5Suppliers,
    addSuppliers,
    updateSupplier,
    deleteSupplier,
    getSupplier,
    getAllProducts,
    getLast5Products,
    addProducts,
    updateProduct,
    deleteProduct,
    getProduct
  };
};

// let's return back our create method as the default.
export default {
  create
};
