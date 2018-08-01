import React from 'react';
import Classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger =(props)=>{

    let transformedIngredients=Object.keys(props.ingredients)
    //[salad,bacon,cheese,meat]
    .map(igKey=>{
        return[...Array(props.ingredients[igKey])]
        //[,]
            .map((_,i)=>
            <BurgerIngredient key={igKey+i} type={igKey}/>)
        //[<BurgerIngredient key={salad+0} type={salad} />,
        // <BurgerIngredient key={salad+1} type={salad} ]

        //output:
        //[
        // [<BurgerIngredient key={salad+0} type={salad} />,
        // <BurgerIngredient key={salad+1} type={salad}/>],
        // [<BurgerIngredient key={bacon+0} type={salad} />],
        // [<BurgerIngredient key={cheese+0} type={salad} />],
        // [<BurgerIngredient key={meat+0} type={salad} />]
        // ]

    })
        .reduce((a,b)=>{
            return a.concat(b)
        });
    // console.log(transformedIngredients);
    if(transformedIngredients.length===0){
        transformedIngredients=<p>add!</p>

    }
    return(
        <div className={Classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}

            <BurgerIngredient type='bread-buttom'/>

        </div>
    );

};

export default burger;