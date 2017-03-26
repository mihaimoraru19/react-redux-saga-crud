import { createReducer } from 'reduxsauce';
import Types from './../actions/types';

export const INITIAL_STATE = {
  fetching: false,
  list: []
};

// request last 5 products
const request = state =>
  Object.assign({}, state, { fetching: true });

// receive last 5 products
const receive = (state, { products }) =>
   Object.assign({}, state, {
     fetching: false,
     list: products
   });


// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.PRODUCTS_REQUEST]: request,
  [Types.PRODUCTS_RECEIVE]: receive
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

