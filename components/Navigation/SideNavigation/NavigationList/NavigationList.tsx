//********** IMPORTS ************* */
import React from 'react';
import NavigationItem from './NavigationItems/NavigationItem';
//******************************** */

const NavigationList = () => {
    return (
        <ul className="navigation__list">
            <NavigationItem title="Pages" href="" />
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
            <NavigationItem href="/charts" title="charts">
                <div className="navigation__item--icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="svg-icon svg-r"
                    >
                        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                        <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                    </svg>
                </div>
            </NavigationItem>
            <NavigationItem href="/tables" title="Tables">
                <div className="navigation__item--icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="svg-icon svg-r"
                    >
                        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                        <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                    </svg>
                </div>
            </NavigationItem>
        </ul>
    );
};

export default NavigationList;
