import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './components/App';

import './css/main.scss';

ReactDOM.render((
    <HashRouter>
        <App/>
    </HashRouter>), document.getElementById('root'));