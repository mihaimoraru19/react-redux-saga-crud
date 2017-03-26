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
const receive = (state, { suppliers }) =>
   Object.assign({}, state, {
     fetching: false,
     list: suppliers
   });


// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.SUPPLIERS_REQUEST]: request,
  [Types.SUPPLIERS_RECEIVE]: receive
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

