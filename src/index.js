import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store';

import './reset.css';
import './index.css';

import Game from './components/game';

console.log(store.getState());

// We use Provider to pass Redux store down to the components
ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>
  ,
  document.getElementById('root')
);
