import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const middleware = [thunk];
const createStoreWithMddleware = applyMiddleware(...middleware)(createStore);
const store =createStoreWithMddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSIONS__&&window.__REDUX_DEVTOOLS_EXTENSIONS__() )

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
serviceWorker.unregister();
