import React from 'react';
import Classes from './navigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import {Link} from 'react-router-dom'

const navigationItems =(props) =>(
    <ul className={Classes.NavigationItems}>


        <NavigationItem link="/" > Burger Builder </NavigationItem>

            <NavigationItem link='orders'> CheckOut</NavigationItem>




    </ul>
);

export default navigationItems;