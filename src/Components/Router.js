import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Header from "./Header";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/tv" component={TV} />
      <Route path="/search" component={Search} />
      {/* 위에서 일치하는 주소가 없다면 "/"으로 redirect */}
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
