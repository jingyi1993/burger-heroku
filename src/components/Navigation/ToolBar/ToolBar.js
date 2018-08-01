import React from 'react';
import Classes from'./ToolBar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar =(props)=>{
    return(
        <header className={Classes.ToolBar}>
            {/*<div>MENU</div>*/}
            <button onClick={props.drawerToggleClicked}>Menu</button>
            <div>LOGO</div>
            <nav className={Classes.DeskTopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    )

}



export default toolbar