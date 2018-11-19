/* eslint-disable no-case-declarations */
import { combineReducers } from "redux";
import {
  ADD_BASKET,
  UPDATE_BASKET,
  REMOVE_BASKET,
  REQUEST_ITEMS,
  RECEIVE_ITEMS,
  RECEIVE_ITEM
} from "../actions/index";

const addedRecipesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BASKET:
      return [
        ...state,
        {
          id: action.id
        }
      ];
    case UPDATE_BASKET:
      return state.map(
        addedRecipe =>
          addedRecipe.id == action.id
            ? {
                ...addedRecipe,
                person: action.person
              }
            : addedRecipe
      );
    case REMOVE_BASKET:
      return state.filter(addedRecipe => {
        return addedRecipe.id !== action.id;
      });
    default:
      return state;
  }
};

function upsertItem(item, items) {
  const newItem = { ...item, id: item._id };
  return { ...items, [newItem.id]: newItem };
}

const itemsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ITEMS:
      const nextState = { ...state };
      action.payload.forEach(e => {
        nextState[e._id] = Object.assign({ id: e._id }, e);
      });
      return nextState;
    case RECEIVE_ITEM:
      return upsertItem(action.payload, state);
    default:
      return state;
  }
};
const idsReducer = (state = [], action) => {
  if (action.query !== "") {
    return state;
  }
  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.payload.map(e => e._id);
    default:
      return state;
  }
};
const searchedIdsReducer = (state = [], action) => {
  if (action.query == "") {
    return state;
  }
  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.payload.map(e => e._id);
    default:
      return state;
  }
};
const searchTermReducer = (state = "", action) => {
  switch (action.type) {
    case REQUEST_ITEMS:
      return action.query;
    default:
      return state;
  }
};

const isFetching = (state = true, action) => {
  switch (action.type) {
    case REQUEST_ITEMS:
      return true;
    case RECEIVE_ITEMS:
      return false;
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  addedRecipes: addedRecipesReducer,
  items: itemsReducer,
  ids: idsReducer,
  searchedIds: searchedIdsReducer,
  searchTerm: searchTermReducer,
  isFetching
});

export default rootReducer;

export const getAllItems = state => {
  return state.ids.map(id => state.items[id]);
};
export const getSearchItems = state => {
  return state.searchedIds.map(id => state.items[id]);
};
export const getIsFetching = state => {
  return state.isFetching;
};
export const getIsInBasket = (state, id) => {
  return state.addedRecipes.findIndex(e => {
    return e.id === id;
  }) > -1
    ? true
    : false;
};
