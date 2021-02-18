//********** IMPORTS ************* */
import React from 'react';
import NavigationList from './NavigationList/NavigationList';
//******************************** */

const SideNavigation = () => {
    return (
        <header className="header side__navigation">
            Logo
            <nav className="navigation">
                <NavigationList />
            </nav>
        </header>
    );
};

export default SideNavigation;
