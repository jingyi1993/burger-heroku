import React,{Component} from 'react';
import  Aux from '../../../hoc/Aux';
import Button from '../../../components/UI/Button/Button';
import {Link} from 'react-router-dom';

class orderSummary extends Component{

    componentWillUpdate() {
        console.log('[OrderSummary] will update')
    }
    render(){
        const ingredientSummary =Object.keys(this.props.ingredients)
        //[salad,cheese,meat,bacon]
            .map(a=>{
                return <li key={a}>
                <span style={{textTransform:'capitalize'}}>
                    {a}
                    </span>:{this.props.ingredients[a]}
                </li>
                //[salad:1,cheese:0,meat:2,bacon:1]
            });
        return(
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price:{this.props.price}</strong></p>
                <p>Continue to check out?</p>
                <Button btnTpre="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>

                <Button btnTpre="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>

            </Aux>

        )
    }

}

export default orderSummary;