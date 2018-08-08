import React,{Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Classes from './ContactData.css'
import axios from '../../../axios';
import  Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/input/input';

class ContactData extends Component {
    state= {
        orderForm:{
            name: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder: 'your name',
                },
                value: '',

            },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder: 'your email',
                },
                value: '',
            },
            street:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder: 'your address',
                },
                value: '',
            },
            zipcode:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder: 'zipcode',
                },
                value: '',
            },
            country:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder: 'country',
                },
                value: '',
            },
            deliveryMethod:{
                elementType:'select',
                elementConfig:{
                    options:[
                        {value: 'fastest', displayValue:'fastest'},
                        {value: 'cheapest', displayValue:'cheapest'}
                    ],
                    type:'text',
                    placeholder: 'your name',
                },
                value: '',
            }

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
    contactDataChangedHandler=(r,id)=>{
        // this.setState({
        //
        // })

        const updatedOrderform = {
            ...this.state.orderForm
        }
        const updatedElement =  {
            ...updatedOrderform[id]
        };
        updatedElement.value = r.target.value;
        updatedOrderform[id]=updatedElement;

        this.setState({
            orderForm:updatedOrderform
        })
    };

    render() {

        const formElementArray =[];
        for(let key in this.state.orderForm){
            //[id: name, config: {
            //
            //                 elementType:'input',
            //                 elementConfig:{
            //                     type:'text',
            //                     placeholder: 'your name',
            //                 },
            //                 value: '',
            //
            //            }]

            // deliveryMethod:{
            //                 elementType:'select',
            //                 elementConfig:{
            //                     options:[
            //                         {value: 'fastest', displayValue:'fastest'},
            //                         {value: 'cheapest', displayValue:'cheapest'}
            //                     ],
            //                     type:'text',
            //                     placeholder: 'your name',
            //                 },
            //                 value: '',
            //             }
            formElementArray.push({
                id:key,
                config: this.state.orderForm[key],

            })
        }

        let form =(
            <form className={Classes.ContactData}>

                {formElementArray.map(formElement=>(
                <Input elementtype={formElement.config.elementType}
                       elementconfig={formElement.config.elementConfig}
                       // placeholder={formElement.config.elementConfig.placeholder}
                       key={formElement}
                       value={formElement.config.value}
                       changed={(r) => this.contactDataChangedHandler(r,formElement)}/>
                ))}
                {/*<Input elementType='input' value='name' elementConfig='text'/>*/}
                {/*<Input elementType='input' value='email' elementConfig='text'/>*/}
                {/*<Input elementType='input' value='street' elementConfig='text'/>*/}
                {/*<Input elementType='input' value='country' elementConfig='text'/>*/}

                <Button btnType='Success' clicked={this.OrderHandler}>Order</Button>
            </form>
        );

        if(this.state.spinner) {
               form=(<Spinner/>);
        }
        return (
            <div>
              <h4 className={Classes.Title}>Enter your contact data</h4>
                {form}


            </div>
        )
    }

}

export default ContactData;

