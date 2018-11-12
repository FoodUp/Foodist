import { combineReducers } from "redux";
import {
  SEARCH_ITEM,
  ADD_BASKET,
  UPDATE_BASKET,
  REMOVE_BASKET,
  REQUEST_ITEMS,
  RECEIVE_ITEMS,
  RECEIVE_ITEM
} from "../actions/index";

const arrayToIdMap = arr => {
  return arr.reduce((a, c) => {
    a[c._id] = Object.assign({ id: c._id }, c);
    return a;
  }, {});
};
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
      return arrayToIdMap(action.payload);
    case RECEIVE_ITEM:
      return upsertItem(action.payload, state);
    default:
      return state;
  }
};

const searchTermReducer = (state = "", action) => {
  switch (action.type) {
    case SEARCH_ITEM:
      return action.term;
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
  searchTerm: searchTermReducer,
  isFetching
});

export default rootReducer;
