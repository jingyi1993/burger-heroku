import React,{Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component{
    state={
        ingredients:{
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1,
        },
        price:1,
    };

    componentWillMount() {
        console.log(this.props);
        const query = new URLSearchParams(this.props.location.search);
        //?salad=0&bacon=0&cheese=2&meat=0

        const ingredients ={};
       let price = null;

        for(let param of query.entries()) {
            //['salad', '0'];
            //['bacon','0'];
            //['cheese','2'];
            //['meat','0']
            //['price', '...']

            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
            //ingredients:{
            // salad: 0,
            // bacon:0,
            // cheese:2,
            // meat:0}
        }

        this.setState({
            ingredients: ingredients, price: price
        })



    }

    //new method instead of <Link> method;
    checkoutCanceledHandler=()=>{
        this.props.history.goBack();
    };

    checkoutContinuedHandler =()=> {
        this.props.history.replace( '/checkout/contact-data' );
    };

    render(){
        // console.log(this.props);

        return(
            <div>


                <CheckoutSummary ingredients={this.state.ingredients}
                                 checkoutCanceled={this.checkoutCanceledHandler}
                                 checkoutContinued={this.checkoutContinuedHandler}
                />

                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />)} />







            </div>

        )
    }

};

export default Checkout;