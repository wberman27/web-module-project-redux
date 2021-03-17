import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './reducers'
import 'bulma/css/bulma.css';
import './styles.scss';
import logger from 'redux-logger'

//create store from redux
//applyMiddleware(logger) allows for redux debugging
const store = createStore(reducer, applyMiddleware(logger))

//wrap App in Provider component from react-redux, pass in store prop
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
