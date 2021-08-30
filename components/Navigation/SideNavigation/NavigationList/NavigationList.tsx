//********** IMPORTS ************* */
import React from 'react';
import NavigationItem from './NavigationItems/NavigationItem';
import Wrapper from '../../../../helpers/Hoc/Wrappers/Wrapper';
import SvgIcon from '../../../Icons/Icons';
//******************************** */
interface Props {
    show?: boolean;
    listClass?: string;
    itemsClass?: string;
}
const NavigationList: React.FC<Props> = ({ show, listClass, itemsClass }) => {
    return (
        <ul className="navigation__list">
            {/* //- Pages Title */}
            <NavigationItem title={show ? '...' : 'Pages'} href="" />
            {/* //- homepage  */}
            <NavigationItem href="/" title="Home" show={show}>
                <Wrapper class="navigation__item--icon" dataType="img">
                    <SvgIcon title="home" />
                </Wrapper>
            </NavigationItem>
            {/* //- About Data */}
            <NavigationItem href="/about-data" title="About Data" show={show}>
                <Wrapper class="navigation__item--icon" dataType="img">
                    <SvgIcon title="about" />
                </Wrapper>
            </NavigationItem>

            {/* //- Vaccine title */}
            <NavigationItem title={show ? '...' : 'Vaccine'} href="" />

            {/* //- Vaccine page */}
            <NavigationItem href="/vaccine" title="Vaccine" show={show}>
                <Wrapper class="navigation__item--icon" dataType="img">
                    <SvgIcon title="vaccine" />
                </Wrapper>
            </NavigationItem>

            {/* //- charts and Tables title */}
            <NavigationItem title={show ? '...' : 'Charts and tables'} href="" />

            {/* //- Charts page */}
            <NavigationItem href="/charts-history" title="charts" show={show}>
                <Wrapper class="navigation__item--icon" dataType="img">
                    <SvgIcon title="chart" />
                </Wrapper>
            </NavigationItem>
            {/* //- Tables title */}
            <NavigationItem href="/countries-table" title="Countries Table" show={show}>
                <Wrapper class="navigation__item--icon" dataType="img">
                    <SvgIcon title="table" />
                </Wrapper>
            </NavigationItem>

            {/* //- Map title */}
            <NavigationItem title={show ? '...' : 'Map'} href="" />

            {/* //- Map page */}
            <NavigationItem href="/global-map" title="global Map" show={show}>
                <Wrapper class="navigation__item--icon" dataType="img">
                    <SvgIcon title="map" />
                </Wrapper>
            </NavigationItem>
        </ul>
    );
};

export default NavigationList;
