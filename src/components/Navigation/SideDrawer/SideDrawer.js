import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Aux';
import Classes from './SideDrawer.css';

const sideDrawer =(props)=>{

    let attachedClasses =[Classes.SideDrawer, Classes.Open];
    if (!props.open) {
        attachedClasses= [Classes.SideDrawer, Classes.Close]
    }
    console.log(!props.open);
    return (
        <Aux>
        <BackDrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>

            <div className={Classes.Logo}>Logo</div>
            <nav>
                <NavigationItems/>
            </nav>

        </div>
        </Aux>
    )
};



export default sideDrawer;