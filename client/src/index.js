import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
//here we are connecting to the div with the ID "root"
ReactDOM.render(<App />, document.getElementById('root'));