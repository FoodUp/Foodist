import "./style/App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers/";
import ShoppingListPage from "./components/shoppingList";
import HomePage from "./components/home";
import SearchResultPage from "./components/searchResult";
import Recipe from "./components/recipe";
import NavBar from "./components/navbar";
import NoMatch from "./components/nomatch";

class App extends Component {
  render() {
    const store = createStore(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return (
      <Provider store={store}>
        <Router>
          <div>
            <header>
              <NavBar />
            </header>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shoppinglist" component={ShoppingListPage} />
              <Route path="/search/:term" component={SearchResultPage} />
              <Route path="/recipe/:id" component={Recipe} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
