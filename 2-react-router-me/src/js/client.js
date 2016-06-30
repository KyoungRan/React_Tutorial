import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

//import Bootstrap from "./vendor/bootstrap-without-jquery";

import Archives from "./Pages/Archives";
import Featured from "./Pages/Featured";
import Layout from "./Pages/Layout";
import Settings from "./Pages/Settings";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={Featured}></IndexRoute>
        <Route path="archives" name="archives" component={Archives}></Route>
        <Route path="settings" naem="settings" component={Settings}></Route>
    </Route>
  </Router>, app);
