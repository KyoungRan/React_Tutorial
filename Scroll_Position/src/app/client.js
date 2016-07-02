import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Development from "./pages/Development";
import Business from "./pages/Business";
import Software from "./pages/Software";
import design from "./pages/design";
import Marketing from "./pages/Marketing";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home} />
            <Route path='/dev' component={Development} />
            <Route path='/biz' component={Business} />
            <Route path='/software' component={Software} />
            <Route path='/design' component={design} />
            <Route path='/marketing' component={Marketing} />
        </Route>
    </Router>,
    app);
