//********** IMPORTS ************* */
import React from 'react';

//******************************** */
interface Props {
    class?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
const Wrapper = (props: Props) => {
    return (
        <div className={props.class} onClick={props.onClick} style={props.style}>
            {props.children}
        </div>
    );
};

export default Wrapper;
