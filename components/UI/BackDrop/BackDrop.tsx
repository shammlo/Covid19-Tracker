//********** IMPORTS **********/
import React from 'react';
//*****************
interface Props {
    show: boolean;
    clicked?: () => void;
}
const BackDrop: React.FC<Props> = ({ show, clicked }) => {
    return show ? <div className="backdrop" onClick={clicked}></div> : null;
};
export default BackDrop;
