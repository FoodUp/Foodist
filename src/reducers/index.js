import { combineReducers } from 'redux';
import { SEARCH_ITEM } from '../actions';

const recipeItems = {
    1: {
        "name": "Coco Mango Cube",
        "description" : "Refreshing dessert in summer day",
        "person" : 1, 
        "time": {
            "amount" : "20",
            "unit"   : "min"
        },
        "tag": [
            "tropical"
        ],
        "type": "dessert",
        "image" : "1.jpg",
        "tool": [
            {
                "name": "Glass Box",
                "quantity": 1
            }
        ],
        "ingredients": [
            {
                "name": "Coco Cream",
                "amount": 100,
                "unit": "ml"
            },
            {
                "name": "Fresh Mango",
                "amount": 1,
                "unit" : "piece"
            },
            {
                "name": "Milk",
                "amount": 50,
                "unit" : "ml"
            },
            {
                "name": "Suger"
            }, 
            {
                "name": "gelatine",
                "amount": 200,
                "unit" : "g"
            }
        ],
        "steps" : [
            {
                "text": "Get a fresh mango, cut it into little cube."
            },
            {
                "text": "Mix gelatine powder with water, boil it and stir to distribute the powder"
            },
            {
                "text": "Add milk and coco cream into the liquide mixed ,add some surger or honey as you prefer."
            },
            {
                "text": "Pour the boiling coco milk into a glass container, put the mango cube in it. The mango would float slightly "
            },
            {
                "text": "Leave it cool down and thenfreeze in the fridge for more than 2 hours. Be patient :)"
            },
            { 
                "text": "Take the box out of the fridge, cut the pudding into little cube. Enjoy this freshing dessert. "
            }
    
        ]
    },
    2: {
        "name": "Vegan burger",
        "description" : "Delicious healthy burger",
        "person" : 1, 
        "time": {
            "amount" : "30",
            "unit"   : "min"
        },
        "tag": [
            "vegan"
        ],
        "type": "main course",
        "image" : "2.jpg"
    },
    3: {
        "name": "Fresh Mix",
        "description" : "Refreshing quick salad after long tiring workday",
        "person" : 1, 
        "time": {
            "amount" : "15",
            "unit"   : "min"
        },
        "tag": [
            "green"
        ],
        "type": "Salad",
        "image" : "3.jpg",
    },
    4: {
        "name": "Laozao",
        "description" : "Refreshing dessert in summer day",
        "person" : 1, 
        "time": {
            "amount" : "20",
            "unit"   : "min"
        },
        "tag": [
            "tropical"
        ],
        "type": "dessert",
        "image" : "4.jpg"
    },
    5: {
        "name": "Pasta",
        "description" : "Refreshing dessert in summer day",
        "person" : 1, 
        "time": {
            "amount" : "20",
            "unit"   : "min"
        },
        "tag": [
            "tropical"
        ],
        "type": "dessert",
        "image" : "5.jpg"
    },
    6:{
        "name": "Baozai Rice",
        "description" : "Refreshing dessert in summer day",
        "person" : 1, 
        "time": {
            "amount" : "20",
            "unit"   : "min"
        },
        "tag": [
            "tropical"
        ],
        "type": "dessert",
        "image" : "6.jpg"
    },
    7:{
        "name": "Avocado Banana Smoothie",
        "description" : "Best smoothie ever, loaded with greens, healthy fats, and protein",
        "person" : 2, 
        "time": {
            "amount" : "5",
            "unit"   : "min"
        },
        "tag": [
            "smoothie"
        ],
        "type": "breakfast",
        "image" : "7.jpg",
        "ingredients" : [
            {
                "name": "Ripe banana",
                "amount": 1,
                "unit": ""
            },
            {
                "name": "Ripe avocado",
                "amount": 1,
                "unit" : ""
            },
            {
                "name": "Milk",
                "amount": 2,
                "unit" : "cups"
            },
            {
                "name": "Yaourt",
                "amount": 2,
                "unit" : "cups"
            }
        ] 
    }
};

const itemsReducer = (state = recipeItems, action)=>{
    switch(action.type){
        default : return state;
    }
};

const searchTermReducer = (state = '', action)=>{
    switch(action.type){
        case SEARCH_ITEM : 
            return action.term;
        default : return state;
    }
};

const rootReducer = combineReducers({
    items      : itemsReducer,
    searchTerm : searchTermReducer
})

export default rootReducer;