import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const reduxState = { feelings: '', understanding: '', support: '', comment: '' };

const reducer = (state = reduxState, action) => {
    if (action.type === 'FEELING') {
        return { ...state, feelings: action.payload}
    } else if (action.type === 'UNDERSTANDING') {
        return {...state, understanding: action.payload }
    }else if (action.type === 'SUPPORTED') {
        return {...state, support: action.payload}
    } else if (action.type === 'COMMENTS') {
        return {...state, comment: action.payload}
    } else if (action.type === 'RESET') {
        return {comment: ''}
    }



    return state
}


const storeInstance = createStore(
    combineReducers({
    reducer,
    }),
);





ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'))