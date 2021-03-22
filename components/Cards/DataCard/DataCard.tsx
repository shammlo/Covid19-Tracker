//********** IMPORTS ************* */
import React from 'react';
import Wrapper from '../../../helpers/Hoc/Wrappers/Wrapper';
import LoadingSkeleton from '../../../helpers/LoadingSpinner/LoadingSkeleton';
// import Image from 'next/image';
//******************************** */
interface Props {
    name: string;
    todayValue: number;
    yesterdayValue: number;
}

const helperFunctions = {
    formatNumber: (number: number) => {
        if (isNaN(number)) return number;

        if (number < 9999) {
            return (number / 1000).toFixed(2) + 'k';
        }

        if (number < 1000000) {
            return (number / 1000).toFixed(2) + 'K';
        }
        if (number < 10000000) {
            return (number / 1000000).toFixed(2) + 'M';
        }

        if (number < 1000000000) {
            return (number / 1000000).toFixed(2) + 'M';
        }

        if (number < 1000000000000) {
            return (number / 1000000000).toFixed(2) + 'B';
        }

        return '1T+';
    },

    percentageCalc: (today: number, yesterday: number) => {
        const yesterdayCase = today - yesterday;
        const yesterdayPercent = parseFloat(((yesterdayCase / today) * 100).toFixed(2));

        return yesterdayPercent;
        // return Math.abs(yesterdayPercent);
    },
};

//----------------------------------------------------------------
const DataCard = (props: Props) => {
    let yesterdayNumber, percentage;
    const oldName = props.name.split('_');
    const newName = oldName[0] === 'today' ? oldName.join("'s ") : oldName.join(' ');
    // console.log(newName[0]);
    yesterdayNumber = helperFunctions.formatNumber(props.yesterdayValue);
    percentage = helperFunctions.percentageCalc(props.todayValue, props.yesterdayValue);
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
                    <img src={`images/${newName}.svg`} alt="image" width="250" height="250" />
                </Wrapper>
                <h3 className="card__box--name">{newName}</h3>
                <h2 className={`card__box--value ${todayClasses}`}>
                    {props.todayValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
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
