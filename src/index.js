import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


const feelings = (state = 0, action) => {
    if (action.type === 'FEELING') {
        console.log('in feeling info,', action.payload)
        return action.payload
    }
    return state
}

const understanding = (state = 0, action) => {
    if (action.type === 'UNDERSTANDING') {
        console.log('in understand info,', action.payload)
        return action.payload
    }
    return state
}

const supported = (state = 0, action) => {
    if (action.type === 'SUPPORTED') {
        console.log('in supported info,', action.payload)
        return action.payload
    }
    return state
}

const comments = (state = "", action) => {
    if (action.type === 'COMMENTS') {
        console.log('in comments info,', action.payload)
        return action.payload
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
    feelings,
    understanding,
    supported,
    comments,
    }),
);





ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'))