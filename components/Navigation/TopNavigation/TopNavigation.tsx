import React, { FC, useState } from 'react';
import Wrapper from '../../../helpers/Hoc/Wrappers/Wrapper';
import Button from '../../../helpers/Hoc/Buttons/Button';
import ThemeChange from '../../UI/Theme/ThemeChange';
import SVGIcons from '../../Icons/Icons';
//******************************** */
interface Props {
    showSideNavHandler: () => void;
    lightTheme?: boolean;
    toggleLightTheme?: () => void;
    isMobile: boolean;
    collapseSideNav?: any;
    showSideNavigation: boolean;
}

const TopNavigation: FC<Props> = (props) => {
    const [fullscreen, setFullScreen] = useState(false);

    const enterFullscreen = () => {
        // setFullScreen((prevState: any) => !prevState);
        //   event.preventDefault();
        if (!fullscreen) {
            setFullScreen(true);
            document.documentElement.requestFullscreen();
        } else {
            setFullScreen(false);
            document.exitFullscreen();
        }
    };

    //----------------------------------------------------------------
    return (
        <nav className="header__navbar top-navbar fixed-top-navbar">
            <Wrapper class="top-navbar-content d-flex jc-sb ai-c">
                <Wrapper class="top-nav-left d-flex ai-c">
                    {props.isMobile ? (
                        <Button
                            class="header__navbar--button custom-flex in-flex ml-1"
                            clicked={() => props.showSideNavHandler()}
                            ariaLabel="Activate Mobile Navigation"
                        >
                            <Wrapper
                                class="d-flex ai-c jc-c"
                                style={{ height: '3rem', width: '3rem' }}
                            >
                                <Wrapper class="f-wrap">
                                    <Wrapper class="header__navbar--toggle">
                                        <SVGIcons title="mobile menu" class="mobile-nav-icon" />
                                    </Wrapper>
                                </Wrapper>
                            </Wrapper>
                        </Button>
                    ) : null}
                    <Wrapper
                        class="main-menu-toggle custom-flex in-flex"
                        clicked={() => props.collapseSideNav()}
                        dataType="image icon"
                        ariaLabel="close or expand main menu"
                    >
                        <Wrapper class="menu-toggle f-wrap ">
                            <SVGIcons
                                title={
                                    props.showSideNavigation
                                        ? 'expand-side-nav'
                                        : 'collapse-side-nav'
                                }
                                class="menu-toggle-icon"
                            />
                        </Wrapper>
                        {/* <input id="inpLock" type="checkbox" />
                    <label
                        className="btn-lock"
                        htmlFor="inpLock"
                        onClick={() => props.collapseSideNav()}
                    >
                        <SVGIcons title="lock" />
                    </label> */}
                    </Wrapper>
                </Wrapper>

                <Wrapper class="top-nav-right d-flex ai-c" ariaLabel="fullscreen and theme-toggle">
                    {!props.isMobile ? (
                        <Wrapper
                            class="fullscreen-wrapper custom-flex in-flex"
                            clicked={() => enterFullscreen()}
                            dataType="image icon"
                        >
                            <Wrapper class="f-wrap">
                                <SVGIcons
                                    title={fullscreen ? 'exit fullscreen' : 'fullscreen'}
                                    class="fullscreen-icon"
                                />
                            </Wrapper>
                        </Wrapper>
                    ) : null}
                    <ThemeChange toggleLightTheme={props.toggleLightTheme} class="" />
                </Wrapper>
            </Wrapper>
        </nav>
    );
};

export default TopNavigation;
