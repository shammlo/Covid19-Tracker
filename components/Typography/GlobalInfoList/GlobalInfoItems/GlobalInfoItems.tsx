//********** IMPORTS ************* */
import React from 'react';
import Wrapper from '../../../../helpers/Hoc/Wrappers/Wrapper';
import SVGIcons from '../../../Icons/Icons';
//******************************** */
interface Props {
    children?: React.ReactNode;
    class?: string | null | undefined;
    header?: string;
    pointClass?: string;
    svgTitle: string;
    value: number | string | {};
    remain?: string;
    bodyText: string;
}
const GlobalInfoItems: React.FC<Props> = (props) => {
    return (
        <>
            <li className="globalInfo__item">
                <span className={`globalInfo__item--point item-point ${props.pointClass}`}></span>
                <Wrapper class="globalInfo__content">
                    <Wrapper class="globalInfo__content--header mb-xs">
                        <h5>{props.header}</h5>
                    </Wrapper>
                    <p className="globalInfo__content--text">{props.bodyText}</p>
                    <Wrapper class="globalInfo__content--data d-flex ai-c mt-xs">
                        <Wrapper class="globalInfo__content--icon">
                            <SVGIcons title={props.svgTitle} />
                        </Wrapper>
                        <p className="ml-s">
                            <span className={props.class ? props.class : ''}>{props.value} </span>{' '}
                            {props.remain}
                        </p>
                    </Wrapper>
                    {/* <Wrapper class="globalInfo__content--icon">Icon</Wrapper> */}
                </Wrapper>
            </li>
        </>
    );
};

export default GlobalInfoItems;
