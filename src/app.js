// install -> import -> use
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import "./styles/styles.scss";
import "normalize.css/normalize.css";

const ExpenseDashboardPage = () => (
  <div>This is from my Dashboard Component</div>
);

const AddExpensePage = () => <div>This is from my AddExpense Component</div>;

const EditExpensePage = () => <div>This is from my EditExpense Component</div>;

const HelpPage = () => <div>This is from my Help Component</div>;

const routes = (
  <BrowserRouter>
    {/* BrowserRouter just expects one child that's why the need of the div tag below */}
    <div>
      <Route exact={true} path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
