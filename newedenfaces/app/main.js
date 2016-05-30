import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

let histroty = createBrowserHistory();

ReactDOM.render(<Router history={history}>{routes}</Router>, docuement.getElementById('app'));
