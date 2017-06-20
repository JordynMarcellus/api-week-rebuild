// react and JSX!
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';

import registerServiceWorker from './registerServiceWorker';

// redux!
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { CreateJumpstateMiddleware } from 'jumpstate';
import formState from './state/forms.js';
import searchState from './state/search-info.js';

import './index.css';

const reducers = {
    //as we add more state stuff we can add stuff here
    formData: formState,
    searchData: searchState
}

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer,
    applyMiddleware(
        CreateJumpstateMiddleware()
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();