import { combineReducers } from 'redux';
import { SEARCH_FOOD } from '../actions';

const activeItemReducer = (state = '', action)=>{
    switch(action.type){
        default : return state;
    }
};

const itemListReducer = (state = {}, action)=>{
    switch(action.type){
        default : return state;
    }
};

const searchTermReducer = (state = '', action)=>{
    switch(action.type){
        case SEARCH_FOOD : 
            console.log(action);
            return action.term;
        default : return state;
    }
};

const rootReducer = combineReducers({
    activeItem : activeItemReducer,
    itemList   : itemListReducer,
    searchTerm : searchTermReducer
})

export default rootReducer;