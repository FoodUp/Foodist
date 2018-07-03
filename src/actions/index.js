export const SEARCH_ITEM = 'search_item';

export function searchItem(searchTerm){
    return {
        type: SEARCH_ITEM,
        term: searchTerm
    }
}