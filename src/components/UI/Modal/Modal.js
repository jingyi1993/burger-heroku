import React,{Component} from 'react';
import Classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import BackDrop from '../../../components/UI/BackDrop/BackDrop';

class modal extends Component {

    // rerender component necessarily
    //impotent!!!!!
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show||
            nextProps.children !== this.props.children



    }
    componentWillUpdate() {
        console.log('[Modal] will update')
    }


    render( ){
        return(
            <Aux>
                <BackDrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={Classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}




export default modal;