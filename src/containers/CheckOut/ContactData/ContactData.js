import React,{Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Classes from './ContactData.css'
import axios from '../../../axios';
import  Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state= {
        name: '',
        email:'',
        address: {
            street: '' ,
            postalCode: '',
        },
        spinner: false,


    }

    OrderHandler = ()=>{
      console.log(this.props);

          this.setState({spinner: true});
          // alert('continue!')
          //send data to backend;
        // const order ={
        //    price: this.state.price
        // };
          const order = {
              ingredients: this.props.ingredients,
              price: this.props.price,
              address: '1833 riverside'

          };

          axios.post( '/orders.json', order )
              .then( response => {
                  console.log(response);
                  this.setState({
                      spinner: false,

                  });
                  this.props.history.push('/')

              })
              .catch( error => {
                  console.log(error.response);
                  this.setState({
                      spinner: false
                  })
              } );

    }

    render() {
        let form =(
            <form className={Classes.ContactData}>
                <input type="text" name='name' placeholder='your name'/>
                <input type='text' name='email' placeholder='your email'/>
                <input type="text" name='street' placeholder='street'/>
                <input type="text" name='postalcode' placeholder='your postalcoed'/>
            </form>
        )

        if(this.state.spinner) {
               form=(<Spinner/>);
        }
        return (
            <div>
              <h4>Enter your contact data</h4>
                {form}

                <Button btnType='Success' clicked={this.OrderHandler}>Order</Button>
            </div>
        )
    }

}

export default ContactData;

