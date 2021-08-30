//********** IMPORTS ************* */
import React from 'react';
import Wrapper from '../../../helpers/Hoc/Wrappers/Wrapper';
import LoadingSkeleton from '../../../helpers/LoadingSpinner/LoadingSkeleton';
import {
    formatNumber,
    percentageCalc,
    numberWithCommas,
} from '../../../helpers/Functions/HelperFunctions';
//******************************** */
interface Props {
    name: string;
    todayValue: number;
    yesterdayValue: number;
}
//----------------------------------------------------------------
const DataCard: React.FC<Props> = (props) => {
    let yesterdayNumber, percentage;
    const oldName = props.name.split('_');
    const newName = oldName[0] === 'today' ? oldName.join("'s ") : oldName.join(' ');
    // console.log(newName[0]);
    yesterdayNumber = formatNumber(props.yesterdayValue);
    percentage = percentageCalc(props.todayValue, props.yesterdayValue);
    let classes = percentage < 0 ? 'decrease danger' : 'increase success';

    classes =
        percentage < 0 && newName === "today's Recovered"
            ? 'decrease danger'
            : percentage > 0 && newName === 'total Recovered'
            ? 'increase success'
            : (percentage > 0 && newName === 'total Cases') || newName === 'total Deaths'
            ? 'increase danger'
            : 'decrease success';
    let todayClasses =
        newName === 'total Recovered' || newName === "today's Recovered"
            ? 'success'
            : newName === 'total Deaths' || newName === "today's Deaths"
            ? 'danger'
            : '';
    //----------------------------------------------------------------
    //- Render
    let card = (
        <Wrapper class="card__box box-one ta-c">
            <LoadingSkeleton />
        </Wrapper>
    );
    if (props.todayValue && props.name && props.yesterdayValue) {
        card = (
            <Wrapper class="card__box ta-c">
                <Wrapper class="card__box--icon">
                    <img
                        className="card__box--img"
                        src={`images/${newName}.svg`}
                        alt="image"
                        width="250"
                        height="250"
                    />
                </Wrapper>
                <h3 className="card__box--name">{newName}</h3>
                <h2 className={`card__box--value ${todayClasses}`}>
                    {numberWithCommas(props.todayValue)}
                </h2>
                <Wrapper class="card__box--info d-flex flex-c ai-c">
                    <Wrapper class="percentage-info">
                        <span className={classes}>{percentage}%</span>
                    </Wrapper>
                    <Wrapper class="info-text d-flex flex-c ai-c">
                        <p>from yesterday{'\n'}</p>
                        <span className="fc-yel">({yesterdayNumber})</span>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        );
    }
    return card;
};

export default DataCard;
