import * as api from "../api";

export const ADD_BASKET = "add_basket";
export const UPDATE_BASKET = "update_basket";
export const REMOVE_BASKET = "remove_basket";
export const REQUEST_ITEMS = "request_items";
export const RECEIVE_ITEMS = "receive_items";
export const RECEIVE_ITEM = "receive_item";

const requestItems = query => ({
  type: REQUEST_ITEMS,
  query
});

const receiveItems = (response, query) => ({
  type: RECEIVE_ITEMS,
  query,
  payload: response
});

const receiveItem = item => ({
  type: RECEIVE_ITEM,
  payload: item
});

export const fetchItems = query => dispatch => {
  dispatch(requestItems(query));
  if (query) {
    return api
      .searchItem(query)
      .then(response => receiveItems(response, query))
      .then(dispatch);
  } else {
    return api
      .fetchItems()
      .then(response => receiveItems(response, query))
      .then(dispatch);
  }
};

export const fetchItemById = id => dispatch => {
  api
    .fetchItemById(id)
    .then(receiveItem)
    .then(dispatch)
    .catch(err => {
      alert(err);
    });
};

export function addToBasket(id) {
  return {
    type: ADD_BASKET,
    id
  };
}

export function updateBasket(itemId, person) {
  return {
    type: UPDATE_BASKET,
    id: itemId,
    person
  };
}

export function removeBasket(itemId) {
  return {
    type: REMOVE_BASKET,
    id: itemId
  };
}
