import { combineReducers } from "redux";
import {
  SEARCH_ITEM,
  ADD_BASKET,
  UPDATE_BASKET,
  REMOVE_BASKET
} from "../actions";

const recipeItems = {
  1: {
    id: 1,
    name: "Coco Mango Cube",
    description: "Refreshing dessert in summer day",
    person: 1,
    time: {
      amount: "20",
      unit: "min"
    },
    tag: ["tropical"],
    type: "dessert",
    image: "1.jpg",
    tool: [
      {
        name: "Glass Box",
        quantity: 1
      }
    ],
    ingredients: [
      {
        name: "Coco Cream",
        amount: 100,
        unit: "ml"
      },
      {
        name: "Fresh Mango",
        amount: 1,
        unit: "piece"
      },
      {
        name: "Milk",
        amount: 50,
        unit: "ml"
      },
      {
        name: "Suger"
      },
      {
        name: "gelatine",
        amount: 200,
        unit: "g"
      }
    ],
    steps: [
      {
        text: "Get a fresh mango, cut it into little cube."
      },
      {
        text:
          "Mix gelatine powder with water, boil it and stir to distribute the powder"
      },
      {
        text:
          "Add milk and coco cream into the liquide mixed ,add some surger or honey as you prefer."
      },
      {
        text:
          "Pour the boiling coco milk into a glass container, put the mango cube in it. The mango would float slightly "
      },
      {
        text:
          "Leave it cool down and thenfreeze in the fridge for more than 2 hours. Be patient :)"
      },
      {
        text:
          "Take the box out of the fridge, cut the pudding into little cube. Enjoy this freshing dessert. "
      }
    ],
    color: "#EFD36E"
  },
  2: {
    id: 2,
    name: "Vegan Mushroom Bean Burger",
    description:
      "Mushrooms are surprisingly similar in taste and texture to meat when cooked, so they are the perfect ingredient for vegetarian veggie burgers!This vegetarian, vegan and gluten-free mushroom burger recipe may just surprise you with how tasty it is. This mushroom burger recipe is both vegetarian and vegan as well as gluten-free.",
    person: 1,
    time: {
      amount: "30",
      unit: "min"
    },
    tag: ["vegan"],
    type: "main course",
    image: "2.jpg",
    color: "#faaf4a",
    steps: [
      {
        text:
          "First, sauté the diced white or yellow onion and garlic in canola oil or vegetable oil for 3 to 5 minutes, until the onions are soft."
      },
      {
        text:
          "Next, add the green onions, cumin, and the chopped mushrooms and cook for another 5 minutes, or until mushrooms are cooked. You can add a bit more oil if needed. Set the onion and mushroom mixture aside."
      },
      {
        text:
          "Next, use a fork or potato masher to mash the beans until well mashed. You can also pulse them in a food processor until smooth if you prefer."
      },
      {
        text:
          "In a large bowl, combine the mashed beans with the onion and mushroom mixture and add the parsley, salt, and pepper. Make sure the ingredients are well combined. "
      },
      {
        text:
          "Shape the mixture into patties about one inch thick. If you make them too thin, they may fall apart, but if you make them too thick, it will be more difficult to get them to cook them all the way through."
      },
      {
        text:
          "Heat about two tablespoons of oil and cook each patty until the veggie burgers are done, about 3 minutes on each side. You can also use an indoor grill pan to grill your veggie burgers if you have one. The onion and mushroom flavor is excellent when grilled."
      },
      {
        text: "Serve with your choice toppings!"
      }
    ],
    ingredients: [
      {
        name: "canola oil",
        amount: 1,
        unit: "tablespoon"
      },
      {
        name: "white onion",
        amount: 1,
        unit: "piece"
      },
      {
        name: "clove garlic",
        amount: 1,
        unit: "piece"
      },
      {
        name: "green onions",
        amount: 1,
        unit: "piece"
      },
      {
        name: " cumin ",
        amount: 1 / 2,
        unit: "teaspoon"
      },
      {
        name: "mushrooms ",
        amount: 3 / 4,
        unit: "cup"
      },
      {
        name: "parsley ",
        amount: 1,
        unit: "teaspoon"
      },
      {
        name: "Salt "
      },
      {
        name: "Black pepper "
      },
      {
        name: "oil",
        amount: 2,
        unit: "tablespoons"
      }
    ]
  },
  3: {
    id: 3,
    name: "Fresh Mix",
    description: "Refreshing quick salad after long tiring workday",
    person: 1,
    time: {
      amount: "15",
      unit: "min"
    },
    tag: ["green"],
    type: "Salad",
    image: "3.jpg",
    color: "#BBD3B1"
  },
  4: {
    id: 4,
    name: "Laozao",
    description: "Refreshing dessert in summer day",
    person: 1,
    time: {
      amount: "20",
      unit: "min"
    },
    tag: ["tropical"],
    type: "dessert",
    image: "4.jpg",
    color: "#EAE9E1"
  },
  5: {
    id: 5,
    name: "Pasta",
    description: "Refreshing dessert in summer day",
    person: 1,
    time: {
      amount: "20",
      unit: "min"
    },
    tag: ["tropical"],
    type: "dessert",
    image: "5.jpg",
    color: "#EFD0A0"
  },
  6: {
    id: 6,
    name: "Baozai Rice",
    description: "Refreshing dessert in summer day",
    person: 1,
    time: {
      amount: "20",
      unit: "min"
    },
    tag: ["tropical"],
    type: "dessert",
    image: "6.jpg",
    color: "#D698B2"
  },
  7: {
    id: 7,
    name: "Avocado Banana Smoothie",
    description:
      "Best smoothie ever, loaded with greens, healthy fats, and protein",
    person: 2,
    time: {
      amount: "5",
      unit: "min"
    },
    tag: ["smoothie"],
    type: "breakfast",
    image: "7.jpg",
    ingredients: [
      {
        name: "Ripe banana",
        amount: 1,
        unit: ""
      },
      {
        name: "Milk",
        amount: 1,
        unit: ""
      },
      {
        name: "Ripe avocado",
        amount: 2,
        unit: "cups"
      },
      {
        name: "Yaourt",
        amount: 2,
        unit: "cups"
      }
    ],
    color: "#BED392",
    steps: [
      {
        text:
          "Blend banana, avocado and honey in a food processor until smooth."
      },
      {
        text: "Add milk and blend for 30 seconds."
      },
      {
        text: "Serve immediately."
      }
    ]
  }
};

const ingredients = {
  1: {
    name: "Coco Cream"
  },
  2: {
    name: "Fresh Mango",
    type: "fruit"
  },
  3: {
    name: "Milk",
    type: "beverage"
  },
  4: {
    name: "Suger"
  },
  5: {
    name: "gelatine"
  },
  6: {
    name: "Ripe banana",
    type: "fruit"
  },
  7: {
    name: "Ripe avocado",
    type: "fruit"
  },
  8: {
    name: "Yaourt"
  },
  9: {
    name: "canola oil"
  },
  10: {
    name: "white onion"
  },
  11: {
    name: "clove garlic"
  },
  12: {
    name: "green onions "
  },
  13: {
    name: " cumin "
  },
  14: {
    name: "mushrooms "
  },
  15: {
    name: "parsley "
  },
  16: {
    name: "Salt "
  },
  17: {
    name: "Black pepper "
  },
  18: {
    name: "oil"
  }
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

const itemsReducer = (state = recipeItems, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const ingredientsReducer = (state = ingredients, action) => {
  switch (action.type) {
    case "SELECT_INGREDIENT":
      return ingredients[state.id];
    default:
      return ingredients;
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

const rootReducer = combineReducers({
  addedRecipes: addedRecipesReducer,
  items: itemsReducer,
  ingredients: ingredientsReducer,
  searchTerm: searchTermReducer
});

export default rootReducer;
