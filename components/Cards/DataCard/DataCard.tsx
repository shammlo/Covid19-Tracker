//********** IMPORTS ************* */
import React from 'react';
import Wrapper from '../../../helpers/Hoc/Wrappers/Wrapper';
//******************************** */

const DataCard = (props: any) => {
    return (
        <Wrapper class="card__box box-one">
            <Wrapper class="card__box--icon">
                {/* <img className="icon" src="img/health.svg" alt="Confirmed Icon" /> */}
            </Wrapper>
            <h3 className="heading-3">Total name</h3>
            <h2 className="heading-2 margin-top-small">amount</h2>
            <Wrapper class="card__box--info">
                <span className="info-increase">
                    <span id="caseIncrease">00 </span>
                </span>
                <span className="info-text">
                    from yesterday
                    <span id="totalYesterday" className="yel">
                        (00)
                    </span>
                </span>
            </Wrapper>
        </Wrapper>
    );
};

export default DataCard;
