import React from 'react';
import ReactDOM from 'react-dom';
import { screenResize } from './redux.js';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux.js';

import App from './App.jsx';
import './index.scss';

const devToolStoreEnhancer =
	(window.__REDUX_DEVTOOLS_EXTENSION__ &&
	window.__REDUX_DEVTOOLS_EXTENSION__()) ||
	((x) => x);

const store = createStore(
	reducer,
	devToolStoreEnhancer
);

window.addEventListener('resize', () => {
    store.dispatch(screenResize(window.innerWidth));
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
