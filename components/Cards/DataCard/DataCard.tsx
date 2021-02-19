//********** IMPORTS ************* */
import React from 'react';
//******************************** */

const DataCard = (props: any) => {
    return (
        <div className="card">
            <div className="card__box box-one">
                <span className="card__box--icon">
                    {/* <img className="icon" src="img/health.svg" alt="Confirmed Icon" /> */}
                </span>
                <h3 className="heading-3">Total name</h3>
                <h2 className="heading-2 margin-top-small">amount</h2>
                <div className="card__box--info">
                    <span className="info-increase">
                        <span id="caseIncrease">00 </span>
                    </span>
                    <span className="info-text">
                        from yesterday
                        <span id="totalYesterday" className="yel">
                            00
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DataCard;
