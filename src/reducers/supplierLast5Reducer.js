import { createReducer } from 'reduxsauce';
import Types from './../actions/types';

export const INITIAL_STATE = {
  fetching: false,
  list: []
};

// request last 5 suppliers
const request = state =>
  Object.assign({}, state, { fetching: true });

// receive last 5 suppliers
const receive = (state, { last5Suppliers }) =>
   Object.assign({}, state, {
     fetching: false,
     list: last5Suppliers
   });


// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.SUPPLIERS_LAST5_REQUEST]: request,
  [Types.SUPPLIERS_LAST5_RECEIVE]: receive
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

