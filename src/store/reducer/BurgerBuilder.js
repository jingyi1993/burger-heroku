
//import everything
import  * as actionTypes from '../actions/actions';


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
    purchasable: false,

};

const burgerBuilder =(state= initialState, action) =>{


    switch (action.type){
        case actionTypes.ADD_INGREDIENTS:
            console.log('burgerBuilder',state.price);
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:
                    state.ingredients[action.ingredientName]+1

                },
                price:state.price + INGREDIENT_PRICES[action.ingredientName],

                purchasable: state.price>3.5
            };
        case actionTypes.REMOVE_INGREDIENTS:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:
                    state.ingredients[action.ingredientName]-1

                },
                price:state.price - INGREDIENT_PRICES[action.ingredientName],
                purchasable: state.price>5
            };
        default:{
            return state
        }


    };





};

export default burgerBuilder;