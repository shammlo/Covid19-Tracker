//********** IMPORTS ************* */
import React from 'react';
import NavigationList from './NavigationList/NavigationList';
import NavigationLogo from '../NavigationLogo/NavigationLogo';
import Wrapper from '../../../helpers/Hoc/Wrappers/Wrapper';
//******************************** */
interface Props {
    showSideNavigation: boolean;
    show?: boolean;
}
const SideNavigation: React.FC<Props> = ({ showSideNavigation }) => {
    return (
        <Wrapper
            class={`main-menu side-menu fixed-side-menu ${
                showSideNavigation ? 'hidden-sideNav' : 'show-sideNav'
            }`}
        >
            <NavigationLogo
                src="images/research.png"
                title="Covid-"
                secondTitle="19"
                href="/"
                show={showSideNavigation}
                mainClass="logo"
            />
            <nav className="navigation main-navigation mt-s">
                {/* <button className="btn btn__norm mt-m ml-l" onClick={() => props.collapseSideNav()}>
                    {!sideNavigation ? 'collapse' : 'expand'}
                </button> */}
                <NavigationList show={showSideNavigation} />
            </nav>
        </Wrapper>
    );
};

export default SideNavigation;
// 'hidden-sideNav' : 'show-sideNav'
