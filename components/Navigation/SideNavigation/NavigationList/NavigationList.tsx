//********** IMPORTS ************* */
import React from 'react';
import NavigationItem from './NavigationItems/NavigationItem';
//******************************** */

const NavigationList = () => {
    return (
        <ul className="navigation__list">
            <NavigationItem href="/" title="Home">
                <div className="navigation__item--icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="svg-icon svg-r"
                    >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                </div>
            </NavigationItem>
            <NavigationItem href="/charts" title="charts" />
        </ul>
    );
};

export default NavigationList;
