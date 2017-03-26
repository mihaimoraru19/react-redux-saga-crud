import { createReducer } from 'reduxsauce';
import Types from './../actions/types';

export const INITIAL_STATE = {
  fetching: false,
  supplier: {}
};

// request last 5 suppliers
const request = state =>
  Object.assign({}, state, { fetching: true });

// receive last 5 suppliers
const receive = (state, { supplier }) =>
   Object.assign({}, state, {
     fetching: false,
     supplier
   });


// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.SUPPLIER_REQUEST]: request,
  [Types.SUPPLIER_RECEIVE]: receive
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

