import './style/App.css';

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/';
import ShoppingListPage from './components/shoppingList';
import HomePage from './components/home';
import SearchResultPage from './components/searchResult';



class App extends Component {
  render() {
    return (
      <Provider store={createStore(rootReducer)} >
        <Router>
          <div>
            <Route exact path="/" component={ HomePage }/>
            <Route path="/shoppinglist" component={ ShoppingListPage }/>
            <Route path="/search/:term" component={ SearchResultPage }/>      
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
