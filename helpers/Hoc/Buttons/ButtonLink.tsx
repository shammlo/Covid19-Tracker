//********** IMPORTS **********/
import React from 'react';
import Link from 'next/link';
//************************************

interface Props {
    clicked?: () => void;
    class?: string;
    linkClass?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    disabled?: boolean;
    href: string;
    target?: boolean;
}
const ButtonLink = (props: Props) => {
    return (
        <button
            className={props.class}
            onClick={props.clicked}
            style={props.style}
            disabled={props.disabled}
        >
            <Link href={props.href}>
                <a className={props.linkClass} target={props.target ? '_blank' : undefined}>
                    {props.children}
                </a>
            </Link>
        </button>
    );
};
export default ButtonLink;
