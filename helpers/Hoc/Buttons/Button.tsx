//********** IMPORTS **********/
import React, { MouseEventHandler } from 'react';
//************************************

interface Props {
    clicked?: MouseEventHandler<HTMLButtonElement> | undefined;
    class?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    disabled?: boolean;
    ariaLabel?: string;
}
const button = (props: Props) => {
    return (
        <button
            className={props.class}
            onClick={props.clicked}
            style={props.style}
            disabled={props.disabled}
            aria-label={props.ariaLabel}
        >
            {props.children}
        </button>
    );
};
export default button;
