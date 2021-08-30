//********** IMPORTS ************* */
import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileMenuContext from '../../../../../helpers/Context/MobileMenuContext';
//******************************** */
interface Props {
    href: string;
    title: string;
    children?: React.ReactNode;
    show?: boolean;
}
const NavigationItem: React.FC<Props> = (props) => {
    const router = useRouter();
    const setMobileMenu = useContext(MobileMenuContext);

    let classes = ['navigation__item'];
    if (router.pathname === props.href) {
        classes.push('active');
    }
    const mobileMenuHandler = () => {
        if (window.innerWidth < 1200) {
            setMobileMenu(false);
        }
    };
    let link = (
        <li className="navigation__header">
            <span className="navigation__list--title"> {props.title}</span>
        </li>
    );

    if (props.href) {
        link = (
            <li className={classes.join(' ')}>
                <Link href={props.href}>
                    <a
                        className="navigation__item--link d-flex ai-c"
                        onClick={() => mobileMenuHandler()}
                    >
                        {props.children}
                        <span className={`navigation__item--title ${props.show ? 'd-no' : 'd-in'}`}>
                            {props.title}
                        </span>
                    </a>
                </Link>
            </li>
        );
    }
    return link;
};

export default NavigationItem;
