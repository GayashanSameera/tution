import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import './index.css';
import * as serviceWorker from './serviceWorker';

import LoginForm from './container/LogIn/LoginForm';
import App from './App';

const middleware = [thunk];
const createStoreWithMddleware = applyMiddleware(...middleware)(createStore);
const store =createStoreWithMddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

ReactDOM.render(
    <Provider store={store}>
       <Router history={history}>
            <Switch>
                <Route exact path="/" component={LoginForm} />
                <Route path="/ab" component={App}>
                    <Route path="/app" component={App}/>
                </Route>
            </Switch>
        </Router>
    </Provider>, 
    document.getElementById('root'));
serviceWorker.unregister();
