import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import Router from './components/Router';

import './css/main.scss';

ReactDOM.render((
    <HashRouter>
        <Router/>
    </HashRouter>), document.getElementById('root'));