import { call, put } from 'redux-saga/effects';
import Actions from '../actions/creators';


export function* getSuppliers(api) {
  // make the call to the api
  const response = yield call(api.getAllSuppliers);
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveSuppliers(response.data));
  } else {
    // dispatch failure
    console.log('Error');
  }
}

export function* getSupplier(api, action) {
  const { supplierId } = action;
  // make the call to the api
  const response = yield call(api.getSupplier, supplierId);
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveSupplier(response.data));
  } else {
    // dispatch failure
    console.log('Error');
  }
}

export function* getLast5Suppliers(api) {
  // make the call to the api
  const response = yield call(api.getLast5Suppliers);
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveLast5Suppliers(response.data));
  } else {
    // dispatch failure
    console.log('Error');
  }
}

export function* addSuppliers(api, action) {
  const { newSupplier } = action;
  console.log(api);
  // make the call to the api
  const response = yield call(api.addSuppliers, newSupplier);
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveAddSuppliers(response.data));
    yield put(Actions.requestSuppliers());
  } else {
    // dispatch failure
    console.log('Error');
  }
}

// call(api.updateSupplier, updatedSupplier, supplierId);

export function* updateSuppliers(api, action) {
  const { updatedSupplier, supplierId } = action;
  // make the call to the api
  const response = yield call(api.updateSupplier, updatedSupplier, supplierId);
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveUpdateSuppliers(response.data));
    yield put(Actions.requestSuppliers());
  } else {
    // dispatch failure
    console.log('Error');
  }
}

export function* updateSupplier(api, action) {
  const { updatedSupplier, supplierId } = action;
  // call to the api
  const response = yield call(api.updateSupplier, updatedSupplier, supplierId);
  // check response
  if (response.ok) {
    yield put(Actions.receiveUpdateSuppliers(response.data));
  } else {
    // dispatch failure
    console.log('Error');
  }
}


export function* deleteSupplier(api, action) {
  const { supplierId } = action;

  const response = yield call(api.deleteSupplier, supplierId);
  if (response.ok) {
    yield put(Actions.receiveDeleteSuppliers(response.data));
    yield put(Actions.requestSuppliers());
    yield put(Actions.requestLast5Suppliers());
  } else {
    alert('Cannot delete supplier! Delete its product(s) first!');
  }
}


