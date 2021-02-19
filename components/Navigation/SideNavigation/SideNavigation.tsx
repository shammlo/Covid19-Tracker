//********** IMPORTS ************* */
import React from 'react';
import NavigationList from './NavigationList/NavigationList';
import NavigationLogo from '../NavigationLogo/NavigationLogo';
//******************************** */

const SideNavigation = () => {
    return (
        <header className="header side__navigation">
            <NavigationLogo src="/virus-1.svg" title="Covid-19 Tracker" href="/" />
            <nav className="navigation m-t-s">
                <NavigationList />
            </nav>
        </header>
    );
};

export default SideNavigation;
