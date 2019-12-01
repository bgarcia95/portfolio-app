import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ContactPage from "../components/ContactPage";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import NotFoundPage from "../components/NotFoundPage";
import PortfolioItemPage from "../components/PortfolioItemPage";
import PortfolioPage from "../components/PortfolioPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      {/* BrowserRouter just expects one child that's why the need of the Switch component below */}
      {/* Switch works when it finds a match */}
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route exact={true} path="/portfolio" component={PortfolioPage} />
        <Route path="/portfolio/:id" component={PortfolioItemPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
