//********** IMPORTS **********/
import { actionTypes } from '../../Actions/actionTypes';
//************************************
type Action = {
    type: string;
    payload: {
        twentyOneHist: { cases: number[]; deaths: number[]; recovered: number[]; dates: string[] };
        allHistory: {
            allCases: number[];
            allDeaths: number[];
            allRecovered: number[];
            allDates: string[];
        };
    };
};
//* initial state
const initialState = {
    thisYear: {
        casesHistoryData: null,
        deathsHistoryData: null,
        recoveredHistoryData: null,
        dates: null,
    },
    allHistory: {
        allCasesHistory: null,
        allDeathsHistory: null,
        allRecoveredHistory: null,
        allDates: null,
    },
};
//----------------------------------------------------------------

const historyDataReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case actionTypes.FETCHING_HISTORY_DATA_21:
            return {
                ...state,
            };
        case actionTypes.FETCHING_HISTORY_DATA_21_SUCCESS:
            return {
                ...state,
                thisYear: {
                    casesHistoryData: action.payload.twentyOneHist.cases,
                    deathsHistoryData: action.payload.twentyOneHist.deaths,
                    recoveredHistoryData: action.payload.twentyOneHist.recovered,
                    dates: action.payload.twentyOneHist.dates,
                },
            };
        case actionTypes.FETCHING_HISTORY_DATA_21_FAIL:
            return {
                ...state,
            };

        //- all history
        case actionTypes.FETCHING_HISTORY_DATA_ALL:
            return {
                ...state,
            };
        case actionTypes.FETCHING_HISTORY_DATA_ALL_SUCCESS:
            return {
                ...state,
                allHistory: {
                    allCasesHistory: action.payload.allHistory.allCases,
                    allDeathsHistory: action.payload.allHistory.allDeaths,
                    allRecoveredHistory: action.payload.allHistory.allRecovered,
                    allDates: action.payload.allHistory.allDates,
                },
            };

        default:
            return state;
    }
};

export default historyDataReducer;
