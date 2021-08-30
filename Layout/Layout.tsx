//********** IMPORTS ************* */
import React, { useState, useEffect } from 'react';
import SideNavigation from '../components/Navigation/SideNavigation/SideNavigation';
import TopNavigation from '../components/Navigation/TopNavigation/TopNavigation';
import Wrapper from '../helpers/Hoc/Wrappers/Wrapper';
import BackDrop from '../components/UI/BackDrop/BackDrop';
import Footer from '../components/Footer/Footer';
import SVGIcons from '../components/Icons/Icons';

import { connect } from 'react-redux';
import * as actions from '../store/Actions/actions';
//- custom Context
import MobileMenuContext from '../helpers/Context/MobileMenuContext';
//******************************** */

interface LayoutProps {
    fetch_History_Data: (arg0: number) => void;
    fetch_Today_GlobalData: () => void;
    fetch_Yesterday_GlobalData: () => void;
    fetch_vaccine_data: () => void;
    fetch_Countries_Data: () => void;
    fetch_History_Data_All: () => void;
}
const Layout: React.FC<LayoutProps> = (props) => {
    const [showSideNavigation, setShowSideNavigation] = useState(false);
    // const [light, setLightTheme] = useState<boolean>();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [loadingScreen, setLoadingScreen] = useState(false);
    const windowScreen = typeof window != 'undefined' && (window as any).innerWidth < 1200;
    // let theme = typeof localStorage != 'undefined' && (localStorage as any).getItem('theme');
    // let body = typeof document != 'undefined' && (document as any).body.classList;
    // const lightTheme = 'light';
    // const darkTheme = 'dark';
    //-------------------------------
    useEffect(() => {
        props.fetch_Today_GlobalData();
        props.fetch_History_Data_All();
        props.fetch_Yesterday_GlobalData();
        props.fetch_vaccine_data();
        props.fetch_Countries_Data();

        //- fetching 2021 data
        const oldDate = new Date('1/1/2021') as any;
        const nowDate: any = new Date();
        const daysAgo = nowDate - oldDate;
        let diffDays = Math.ceil(daysAgo / (1000 * 60 * 60 * 24)) - 1;
        props.fetch_History_Data(diffDays);

        const day = 1000 * 60 * 60 * 24;
        //* 60 * 60 * 24
        setInterval(function () {
            diffDays = (diffDays + 1) % 361;
            props.fetch_History_Data(diffDays);
        }, day);
    }, []);
    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);
        // console.log(isMobile);
        // return () => {
        //     window.removeEventListener('resize', updateWindowWidth);
        // };
        // const html = typeof document != 'undefined' && (document as any).documentElement;
        // if (typeof window != 'undefined' && (window as any).innerWidth < 1200)
        //     setIsMobile(window.innerWidth < 1200);
        // if (html.classList.contains('light-mode') || html.classList.contains('dark-mode')) {
        //     setLoadingScreen(false);
        // } else {
        //     setLoadingScreen(false);
        // }
        // setInterval(() => setLoadingScreen(false), 1500);
    }, [isMobile]);

    // useEffect(() => {
    //     window.addEventListener('popstate', function (event) {
    //         // Log the state data to the console
    //         console.log(event.state);
    //     });
    //     return () => {
    //         // setShowSideNavigation(false);
    //     };
    // });
    //----------------------------------------------------------------
    //* Functions
    const updateWindowWidth = () => {
        setIsMobile(window.innerWidth < 1200);
    };

    const showSideNavHandler = () => {
        setShowMobileMenu(!showMobileMenu);
    };
    const collapseSideNav = () => {
        setShowSideNavigation(!showSideNavigation);
    };

    //--------------------------------
    //- Mobiles Classes
    let mobileClasses = ['app', 'layout', 'wrapper'];
    // const appClasses = sideNavigation ? 'side-menu-collapsed' : 'side-menu-expanded';
    let mobClasses = `app layout wrapper  ${
        showSideNavigation ? 'side-menu-collapsed' : 'side-menu-expanded'
    }`;
    showSideNavigation
        ? mobileClasses.push('side-menu-collapsed')
        : mobileClasses.push('side-menu-collapsed');
    if (windowScreen) {
        mobClasses = `app layout wrapper ${!showMobileMenu ? 'menu-close' : 'menu-open'}`;

        !showMobileMenu ? mobileClasses.push('menu-close') : mobileClasses.push('menu-open');
    }
    // mobileClasses.push()

    //-------------------------------
    //- Render
    // ${showMobileMenu && !isMobile ? 'side-menu-collapsed' : 'side-menu-expanded'}

    let homePage = (
        <Wrapper class="loading-screen">
            <SVGIcons title="loading-tea" />{' '}
            <h1 style={{ marginTop: '10px', letterSpacing: '.5px' }}>Loading ...</h1>
        </Wrapper>
    );

    return loadingScreen ? (
        homePage
    ) : (
        <Wrapper class={mobClasses}>
            <MobileMenuContext.Provider value={setShowMobileMenu}>
                <SideNavigation
                    // show={showMobileMenu}
                    // collapseSideNav={collapseSideNav}
                    showSideNavigation={showSideNavigation}
                />
            </MobileMenuContext.Provider>
            <TopNavigation
                showSideNavHandler={showSideNavHandler}
                collapseSideNav={collapseSideNav}
                showSideNavigation={showSideNavigation}
                isMobile={windowScreen}
            />
            <main className={`main__container main-content`}>
                <Wrapper class="main-wrapper container">{props.children}</Wrapper>
            </main>
            <Footer />
            <BackDrop show={showMobileMenu} clicked={showSideNavHandler} />
        </Wrapper>
    );
};

//----------------------------------------------------------------
const mapDispatchToProps = (dispatch: (arg0: any) => void) => ({
    fetch_History_Data: (query: number) =>
        dispatch(actions.historyData.thisYear.fetchHistoryData(query)),
    fetch_Today_GlobalData: () => dispatch(actions.GlobalData.today.fetch_Today_GlobalData()),
    fetch_Yesterday_GlobalData: () =>
        dispatch(actions.GlobalData.yesterday.fetch_Yesterday_GlobalData()),
    fetch_vaccine_data: () => dispatch(actions.VaccineData.fetch_vaccine_data()),
    fetch_Countries_Data: () => dispatch(actions.CountriesData.fetching_CountriesData()),
    fetch_History_Data_All: () => dispatch(actions.historyData.allHistory.fetchHistoryDataAll()),
});
export default connect(null, mapDispatchToProps)(Layout);
