import React  from 'react';
import Classes from './Order.css';

const Order =(props) => {
//props.ingredients:
    //ingredients:{
    // salad:1,bacon:1,meat:1,cheese:1
    // }
const ingredients=[];
for(let ingredientsName in props.ingredients) {
    ingredients.push({
        name:ingredientsName,
        amount:props.ingredients[ingredientsName]
    })
};

//[{name:salad,amount:1},
// {name:salad,amount:1},
// {name:salad,amount:1},
// {name:salad,amount:1}]

const Output = ingredients.map(key=>{
    return(
        <p key={key.name}
        style={{textTransform: 'capitalize',
        display:'inline-block',
        margin:' 0 8px',
        border:'1px solid #ccc'}}>
            {key.name}:{key.amount}</p>
    )
    }
);

    return (
        <div className={Classes.Order}>
            <p>
                Ingredients: {Output}
            </p>
            <p>
                Price : <strong> USD {props.price}</strong>
            </p>
            <p>
                Address: <strong> {props.address}</strong>
            </p>
        </div>
    )


}

export  default Order;