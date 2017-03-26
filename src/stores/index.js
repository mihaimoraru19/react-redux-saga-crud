import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './../reducers';
import mySaga from './../sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

function reduxStore(initialState) {
  const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // We need to require for hot reloading to work properly.
      const nextReducer = require('../reducers');  // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }

  // then run the saga
  sagaMiddleware.run(mySaga);
  return store;
}

export default reduxStore;
