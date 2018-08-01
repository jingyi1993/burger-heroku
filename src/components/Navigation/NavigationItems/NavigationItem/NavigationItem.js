import React from 'react';
import Classes from './navigationItem.css';
import {NavLink} from 'react-router-dom';

const navigationItem =(props)=>(

        <li className={Classes.NavigationItem}>
            <NavLink to={props.link}
           >
                {props.children}
                </NavLink>
        </li>

);

export default navigationItem;