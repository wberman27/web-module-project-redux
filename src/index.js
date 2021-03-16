import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './reducers'
import 'bulma/css/bulma.css';
import './styles.scss';

//create store from redux
const store = createStore(reducer)

//wrap App in Provider component from react-redux, pass in store prop
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
