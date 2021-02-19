//********** IMPORTS ************* */
import React from 'react';
import Link from 'next/link';
//******************************** */
interface Props {
    src: string;
    title: string;
    href: string;
}
const NavigationLogo = (props: Props) => {
    return (
        <div className="logo">
            <Link href={props.href}>
                <a className="logo__link">
                    <img className="logo__link--img" src={props.src} width={20} height={20} />
                    <h2 className="logo__link--title">{props.title}</h2>
                </a>
            </Link>
        </div>
    );
};

export default NavigationLogo;
