//********** IMPORTS ************* */
import React from 'react';
import Link from 'next/link';
//******************************** */
interface Props {
    href: string;
    title: string;
    children?: React.ReactNode;
}
const NavigationItem = (props: Props) => {
    return (
        <li className="navigation__item">
            <Link href={props.href}>
                <a className="navigation__item--link">
                    {props.children}
                    {props.title}
                </a>
            </Link>
        </li>
    );
};

export default NavigationItem;
