//********** IMPORTS ************* */
import React, { useState } from 'react';
import SideNavigation from '../components/Navigation/SideNavigation/SideNavigation';
import TopNavigation from '../components/Navigation/TopNavigation/TopNavigation';
//******************************** */
const Layout = (props: any) => {
    const [sideNavigation, setSideNavigation] = useState(false);

    const showSideNavigation = () => {
        setSideNavigation(!sideNavigation);
    };
    return (
        <div
            className={`app layout wrapper ${
                sideNavigation ? 'side-menu-collapsed' : 'side-menu-expanded'
            }`}
        >
            <SideNavigation show={sideNavigation} />
            <TopNavigation showSideNavigation={showSideNavigation} />
            <main className="main__container content ">{props.children}</main>
        </div>
    );
};

export default Layout;
