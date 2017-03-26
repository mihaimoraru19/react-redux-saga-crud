import { createReducer } from 'reduxsauce';
import Types from './../actions/types';

export const INITIAL_STATE = {
  fetching: false,
  product: {}
};

// request last 5 suppliers
const request = state =>
  Object.assign({}, state, { fetching: true });

// receive last 5 suppliers
const receive = (state, { product }) =>
   Object.assign({}, state, {
     fetching: false,
     product
   });


// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.PRODUCT_REQUEST]: request,
  [Types.PRODUCT_RECEIVE]: receive
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

