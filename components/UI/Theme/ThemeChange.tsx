import React, { useState, useEffect } from 'react';
// import SVGIcons from '../../SVGIcons/SVGIcons';
import dynamic from 'next/dynamic';
const SVGIcons = dynamic(() => import('../../Icons/Icons'));
import Wrapper from '../../../helpers/Hoc/Wrappers/Wrapper';
// *******************************
interface Props {
    toggleLightTheme?: (() => void) | undefined;
    class?: string;
}
const ThemeChange: React.FC<Props> = (props) => {
    const [lightIcon, setLightIcon] = useState(false);
    const [light, setLight] = useState<string>();
    let theme = typeof localStorage != 'undefined' && (localStorage as any).getItem('theme');
    let dataTheme =
        typeof localStorage != 'undefined' && (localStorage as any).getItem('data-theme');
    const lightTheme = 'light';
    const darkTheme = 'dark';
    const html = typeof document != 'undefined' && (document as any).documentElement;
    // let title = theme === lightTheme ? 'moon' : theme === darkTheme ? 'sun' : null;

    useEffect(() => {
        if (theme === lightTheme || theme === darkTheme) {
            document.body.classList.add(theme + '-theme');
            document.body.dataset.theme = theme;
            html.classList.add(theme + '-mode');
        } else {
            document.body.classList.add('dark-theme');
            document.body.dataset.theme = 'dark';
            html.classList.add('dark-mode');
        }
    }, [theme]);
    useEffect(() => {
        if (theme === lightTheme) {
            setLight('moon');
        } else if (theme === darkTheme) {
            setLight('sun');
        }
    }, [theme]);
    const ThemeToggle = () => {
        // setLightIcon(!lightIcon);
        // setLight(!light);
        // props.light(!light);
        // setLightTheme(!lightTheme);
        if (theme === 'dark') {
            document.body.classList.replace('dark-theme', 'light-theme');
            html.classList.replace('dark-mode', 'light-mode');
            document.body.dataset.theme = 'light';
            // e.target.classList.remove(clickedClass);
            localStorage.setItem('theme', 'light');
            theme = lightTheme;
            setLight('moon');
        } else {
            document.body.classList.replace('light-theme', 'dark-theme');
            html.classList.replace('light-mode', 'dark-mode');
            document.body.dataset.theme = 'dark';

            // e.target.classList.add(clickedClass);
            localStorage.setItem('theme', 'dark');
            theme = darkTheme;
            setLight('sun');
            // props.light(false);
        }
    };

    return (
        <Wrapper class="theme-toggle custom-flex in-flex mr-1" clicked={() => ThemeToggle()}>
            <Wrapper class="f-wrap">
                <Wrapper
                    class={`${props.class}`}
                    // onClick={() => toggleLightTheme()}
                    style={{ width: '100%', height: '100%' }}
                >
                    <SVGIcons title={light} class="theme-icon" />
                </Wrapper>
            </Wrapper>
        </Wrapper>
    );
};

export default ThemeChange;
