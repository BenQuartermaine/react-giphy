import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Middleware
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
// Reducers
import gifReducer from './reducers/gif_reducer';
import selectedGifReducer from './reducers/selected_gif_reducer';

import '../assets/stylesheets/application.scss';
import App from './components/app';

const reducers = combineReducers({
  gifs: gifReducer,
  selectedGif: selectedGifReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root'));
