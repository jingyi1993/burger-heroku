import React, {Component} from 'react';
import Aux from '../../../src/hoc/Aux';
import classes from './Layout.css';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class layout extends Component{

    state={
        showSideDrawer: false
    };

    sideDrawerClosedHandler=( )=>{
        this.setState({
            showSideDrawer: false
        })
    };

    sideDrawerToggleHandler=( )=>{
       this.setState(preState=>{
           return{
               showSideDrawer: !preState.showSideDrawer
           }
       })
        console.log(this.state.showSideDrawer)
    };




    render(){
        return(
            <Aux>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>

            </Aux>
        )

    }}
;
export default layout;