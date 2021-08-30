//********** IMPORTS ************* */
import React from 'react';
import Link from 'next/link';
//******************************** */
interface Props {
    src: string;
    title: string;
    href: string;
    show?: boolean;
    secondTitle?: string;
    mainClass?: string;
}
const NavigationLogo = (props: Props) => {
    return (
        <div className={props.mainClass}>
            <Link href={props.href}>
                <a className={`${props.mainClass}__link`}>
                    <img
                        className={`${props.mainClass}__link--img`}
                        src={props.src}
                        width={20}
                        height={20}
                        alt="Logo"
                    />
                    <h2
                        className={`${props.mainClass}__link--title ${
                            props.show ? 'd-no' : 'd-in'
                        }`}
                    >
                        {props.title}
                        {props.secondTitle ? (
                            <span className={`${props.mainClass}-typo`}>{props.secondTitle}</span>
                        ) : null}
                    </h2>
                </a>
            </Link>
        </div>
    );
};

export default NavigationLogo;
