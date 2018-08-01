import React , {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';

import Aux from '../Aux'


const withErrorHandler =(WrappedComponent, axios) => {
    return class extends Component {

        state ={
            error: null,
        }


        // componentWillMount () {
        //     axios.interceptors.request.use(req => {
        //         this.setState({
        //             error:null
        //         });
        //         return req;
        //     });
        //
        //      axios.interceptors.response.use(null, error => {
        //             this.setState({error:error});
        //              console.log(error.message);
        //          }
        //
        // );
        //
        //           }

        componentWillMount () {
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }



        render(){
            return (
                <Aux>
                    <Modal show={this.state.error}>
                        {this.state.error}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }
    }
};

export default withErrorHandler;