//********** IMPORTS ************* */
import React from 'react';
import GlobalInfoItems from './GlobalInfoItems/GlobalInfoItems';
import { numberWithCommas, updatedTime } from '../../../helpers/Functions/HelperFunctions';
//******************************** */
interface Props {
    active: number;
    tests: number;
    affectedCountries: number;
    updated: number;
}
const GlobalInfoList = (props: Props) => {
    const { active, tests, affectedCountries, updated } = props;

    return (
        <>
            <ul className="globalInfo__list ml-s">
                <GlobalInfoItems
                    pointClass="gi-point-b"
                    header="Update Time"
                    bodyText="All data are updated:"
                    value={updatedTime(updated)}
                    remain="minutes ago"
                    svgTitle="timer"
                    class="fc-yel"
                />
                <GlobalInfoItems
                    pointClass="gi-point-p"
                    header="Affected Countries"
                    bodyText="Total affected containers in the world:"
                    value={affectedCountries}
                    svgTitle="global"
                />
                <GlobalInfoItems
                    pointClass="gi-point-o"
                    header="Total Tests"
                    bodyText="Total global tests are:"
                    value={numberWithCommas(tests)}
                    svgTitle="tests"
                />
                <GlobalInfoItems
                    pointClass="gi-point-r"
                    header="Active Cases"
                    bodyText=" Current active cases globally:"
                    value={numberWithCommas(active)}
                    svgTitle="active cases"
                />
            </ul>
        </>
    );
};

export default GlobalInfoList;
