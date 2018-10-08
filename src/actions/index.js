export const SEARCH_ITEM = 'search_item';
export const ADD_BASKET = 'add_basket';
export const UPDATE_BASKET = 'update_basket';
export const REMOVE_BASKET = 'remove_basket';

export function searchItem(searchTerm){
    return {
        type: SEARCH_ITEM,
        term: searchTerm
    }
}
export function addToBasket(id){
    return {
        type: ADD_BASKET,
        id
    }
}

export function updateBasket(itemId, person){
    return {
        type: UPDATE_BASKET,
        id: itemId,
        person
    }
}

export function removeBasket(itemId){
    return {
        type: REMOVE_BASKET,
        id: itemId
    }
}