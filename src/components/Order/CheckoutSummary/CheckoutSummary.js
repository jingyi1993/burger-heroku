import React from 'react';
import Burger from '../../../components/Burger/Burger';
import Button from '../../UI/Button/Button';
import Classes from './CheckoutSummary.css';

const checkoutSummary =(props) =>{
    return(
        <div className={Classes.CheckoutSummary}>
            <h1>we hope it taste well!</h1>
            <div style={{width:'300px', height:'300px', margin:'auto'}}>
                <Burger ingredients = {props.ingredients}/>
            </div>
            <Button btnType='Danger'
            clicked={props.checkoutCanceled}>Cancel</Button>
            <Button btnType='Success'
            clicked={props.checkoutContinued}>Continue</Button>
        </div>
    )}

export default checkoutSummary;