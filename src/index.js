import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import studentReducer from './reducers/studentReducer';
import {Provider} from 'react-redux'

let initialState = [{id:1,name:'John Doe',performance:'A',birthDay:'01.07.1997'},{id:2,name:'Jane Doe',performance:'B',birthDay:'01.02.1998'}
,{id:3,name:'Nick Adams',performance:'C',birthDay:'01.03.2001'},{id:4,name:'Jenny Smith',performance:'D',birthDay:'21.07.2003'}];

if( localStorage.getItem("students") === null)
localStorage.setItem('students',JSON.stringify(initialState));
else 
initialState = JSON.parse(localStorage.getItem('students'));

const store = createStore(studentReducer,initialState);


ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below.
serviceWorker.unregister();
