import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/';
import ShoppingListPage from './components/shoppingList_page';
import HomePage from './components/home_page';
import SearchResultPage from './components/searchResult_page';



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
