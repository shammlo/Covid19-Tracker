//********** IMPORTS ************* */
import React from 'react';
import NavigationList from './NavigationList/NavigationList';
import NavigationLogo from '../NavigationLogo/NavigationLogo';
//******************************** */

const SideNavigation = (props: any) => {
    return (
        <header
            className={`header side__navigation ${props.show ? 'hidden-sideNav' : 'show-sideNav'}`}
        >
            <NavigationLogo
                src="/virus-1.svg"
                title="Covid-19 Tracker"
                href="/"
                show={props.show}
            />
            <nav className="navigation m-t-s">
                <NavigationList show={props.show} />
            </nav>
        </header>
    );
};

export default SideNavigation;
