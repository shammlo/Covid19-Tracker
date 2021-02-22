//********** IMPORTS ************* */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
//******************************** */
interface Props {
    href: string;
    title: string;
    children?: React.ReactNode;
    show?: boolean;
}
const NavigationItem = (props: Props) => {
    const router = useRouter();
    let classes = ['navigation__item'];
    if (router.pathname === props.href) {
        classes.push('active');
    }
    let link = (
        <li className="navigation__item">
            <span className="navigation__list--title"> {props.title}</span>
        </li>
    );

    if (props.href) {
        link = (
            <li className={classes.join(' ')}>
                <Link href={props.href}>
                    <a className="navigation__item--link">
                        {props.children}
                        <p className={`navigation__item--title ${props.show ? 'd-no' : 'd-in'}`}>
                            {props.title}
                        </p>
                    </a>
                </Link>
            </li>
        );
    }
    return link;
};

export default NavigationItem;
