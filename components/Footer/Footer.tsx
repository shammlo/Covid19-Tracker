//********** IMPORTS ************* */
import React from 'react';
import Wrapper from '../../helpers/Hoc/Wrappers/Wrapper';
import Link from 'next/link';
import Logo from '../Navigation/NavigationLogo/NavigationLogo';
//******************************** */

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <footer className="footer main-footer">
            <Wrapper class="footer-wrapper">
                <Wrapper class="footer-nav f-item">
                    <ul className="footer-nav-list d-flex ai-s jc-sb">
                        <li className="footer-nav-item">
                            <Link href="/">
                                <a className="footer-nav-link">
                                    <span className="footer-nav-title">Home</span>
                                </a>
                            </Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="/about-data">
                                <a className="footer-nav-link">
                                    <span className="footer-nav-title">About Data</span>
                                </a>
                            </Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="/countries-table">
                                <a className="footer-nav-link">
                                    <span className="footer-nav-title">Global Table</span>
                                </a>
                            </Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="/charts-history">
                                <a className="footer-nav-link">
                                    <span className="footer-nav-title">
                                        Charts and full history
                                    </span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </Wrapper>
                <Wrapper class="footer-logo f-item" ariaLabel="footer logo image">
                    <Wrapper class="footer-logo-wrapper">
                        <Link href="/">
                            <a className="footer-logo-link">
                                <img
                                    className="footer-logo-img"
                                    src="images/research.png"
                                    width={20}
                                    height={20}
                                    alt="Logo"
                                />
                                <h1 className={`footer-logo-title ${false ? 'd-no' : 'd-in'}`}>
                                    Covid-<span className={`logo-typo`}>19</span>
                                </h1>
                            </a>
                        </Link>
                    </Wrapper>
                </Wrapper>
                <Wrapper class="footer-copyright f-item">
                    <Wrapper class="footer-copyright-wrapper">
                        <span className="footer-copyright-text">
                            &copy; Developed by{' '}
                            <Link href="https://github.com/shammlo">
                                <a className="footer-copyright-link" target="_blank">
                                    Shammlo
                                </a>
                            </Link>
                            .
                        </span>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </footer>
    );
};
export default Footer;
