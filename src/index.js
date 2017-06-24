import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import reducers from './Redux';
import ReduxThunk from 'redux-thunk';


const Thing = () => {

    const store = createStore(
        reducers,
        {},
        applyMiddleware(ReduxThunk)
    );

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

ReactDOM.render(<Thing />, document.getElementById('root'));
registerServiceWorker();
