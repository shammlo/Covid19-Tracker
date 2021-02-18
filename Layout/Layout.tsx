//********** IMPORTS ************* */
import React from 'react';
import SideNavigation from '../components/Navigation/SideNavigation/SideNavigation';
import TopNavigation from '../components/Navigation/TopNavigation/TopNavigation';
//******************************** */
const Layout = (props: any) => {
    return (
        <div className="app">
            <div className="layout">
                <SideNavigation />
                <main className="main__container">
                    <TopNavigation />
                    {props.children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
