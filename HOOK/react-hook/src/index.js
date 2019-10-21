import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import mainReduces from './Reducer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(mainReduces, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
    <Router>
        <Route render={(props) => <App {...props} />} />
    </Router>
</Provider>
    , document.getElementById('root'));