export const SEARCH_FOOD = 'search_food';

export function searchFood(searchTerm){
    return {
        type: SEARCH_FOOD,
        term: searchTerm
    }
}