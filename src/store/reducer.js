
//import everything
import  * as actionTypes from './actions';


const INGREDIENT_PRICES = {
    salad:0.5,
    cheese: 0.4,
    meat:1.3,
    bacon: 0.7
};

const initialState ={
    ingredients:{
         salad:0,
         bacon:0,
         cheese:0,
         meat:0},
    price:4,

};

const reducer =(state= initialState, action) =>{
    switch (action.type){
        case actionTypes.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientsName]:
                        state.ingredients[action.ingredientsName]+1

                   },
                price:state.price + INGREDIENT_PRICES[action.ingredientsName]
            };
        case actionTypes.REMOVE_INGREDIENTS:
                return{
                    ...state,
                    ingredients:{
                        ...state.ingredients,
                        [action.ingredientsName]:
                        state.ingredients[action.ingredientsName]-1

                    },
                    price:state.price - INGREDIENT_PRICES[action.ingredientsName]
                };
        default:{
            return state
        }


    }
};

export default reducer;