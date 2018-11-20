import "./style/App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import ShoppingListPage from "./components/shoppingList";
import HomePage from "./components/home";
import SearchResultPage from "./components/searchResult";
import RecipeContainer from "./components/recipeContainer";
import NavBar from "./components/navbar";
import NoMatch from "./components/nomatch";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <header>
              <NavBar />
            </header>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shoppinglist" component={ShoppingListPage} />
              <Route path="/search/:term" component={SearchResultPage} />
              <Route path="/recipe/:id" component={RecipeContainer} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
