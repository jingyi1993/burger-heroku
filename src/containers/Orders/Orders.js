import React,{Component} from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios';


class Orders extends Component {

    state={
        orders:[],
        loading:true
    }
    componentDidMount(){
        axios.get('/orders.json')
            .then(res=>{
                //turn the object res into array;

                const Orders =[];
                for(let key in res.data){
                    Orders.push ({
                        ...res.data[key],
                        id:key,
                    })
                    ///[{...},{...},{...}]
                }
                console.log(Orders);
                this.setState({
                   loading: false,
                    orders:Orders,
                })
            })
            .catch(err=>{
                this.setState({
                    loading: false,
                })
            })
    }
    render(){
        return(
            <div>
                {this.state.orders.map(order=>{

                    return(
                        <Order key={order.id}
                               address={order.address}
                               price={order.price}
                               ingredients={order.ingredients}
                        />
                    )
                    }




                )}
            </div>

        );
    }
}


export default Orders;