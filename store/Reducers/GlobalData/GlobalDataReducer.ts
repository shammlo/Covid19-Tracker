//********** IMPORTS **********/
import { actionTypes } from '../../Actions/actionTypes';
//************************************

type DataType = {
    [key: string]: number | null;
};
interface ActionTypes {
    type: string;
    payload: {
        today: DataType;
        yesterday: DataType;

        error: object;
    };
}

//----------------------------------------------------------------
//* initial state
const initialState = {
    updatedTimer: null,
    affectedCountries: null,
    active: null,
    tests: null,
    allGlobalData: {
        cases: null,
        deaths: null,
        critical: null,
        recovered: null,
        todayCases: null,
        todayDeaths: null,
        todayRecovered: null,
        active: null,
    },
    globalData: {
        total_Cases: {
            totalToday: null,
            totalYesterday: null,
        },
        today_Cases: {
            totalToday: null,
            totalYesterday: null,
        },
        total_Deaths: {
            totalToday: null,
            totalYesterday: null,
        },
        today_Deaths: {
            totalToday: null,
            totalYesterday: null,
        },
        total_Recovered: {
            totalToday: null,
            totalYesterday: null,
        },
        today_Recovered: {
            totalToday: null,
            totalYesterday: null,
        },
    },
    // todaySecondaryData: {
    //     active: null,
    //     critical: null,
    //     affectedCountries: null,
    // },
    // yesterdaySecondaryData: {
    //     active: null,
    //     critical: null,
    //     affectedCountries: null,
    // },
    total: {
        cases: null,
        deaths: null,
        recovered: null,
    },
    todayData: {
        'today cases': null,
        'today deaths': null,
        'today recovered': null,
        Critical: null,
    },
    loading: false,
    error: false,
    errorMessage: null,
};
//----------------------------------------------------------------

const globalDataReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case actionTypes.FETCHING_TODAY_GLOBAL_DATA:
            return {
                ...state,
                loading: true,
                error: false,
            };
        //- Today Data
        case actionTypes.FETCHING_TODAY_GLOBAL_DATA_SUCCESS:
            return {
                ...state,
                updatedTimer: action.payload.today.updated,
                affectedCountries: action.payload.today.affectedCountries,
                active: action.payload.today.active,
                tests: action.payload.today.tests,
                allGlobalData: {
                    cases: action.payload.today.cases,
                    deaths: action.payload.today.deaths,
                    critical: action.payload.today.critical,
                    recovered: action.payload.today.recovered,
                    todayCases: action.payload.today.todayCases,
                    todayDeaths: action.payload.today.todayDeaths,
                    todayRecovered: action.payload.today.todayRecovered,
                    active: action.payload.today.active,
                },
                globalData: {
                    ...state.globalData,
                    total_Cases: {
                        ...state.globalData.total_Cases,
                        totalToday: action.payload.today.cases,
                    },
                    today_Cases: {
                        ...state.globalData.today_Cases,
                        totalToday: action.payload.today.todayCases,
                    },
                    total_Deaths: {
                        ...state.globalData.total_Deaths,
                        totalToday: action.payload.today.deaths,
                    },
                    today_Deaths: {
                        ...state.globalData.today_Deaths,
                        totalToday: action.payload.today.todayDeaths,
                    },
                    total_Recovered: {
                        ...state.globalData.total_Recovered,
                        totalToday: action.payload.today.recovered,
                    },
                    today_Recovered: {
                        ...state.globalData.today_Recovered,
                        totalToday: action.payload.today.todayRecovered,
                    },
                },
                total: {
                    cases: action.payload.today.cases,
                    deaths: action.payload.today.deaths,
                    recovered: action.payload.today.recovered,
                },
                todayData: {
                    'Today Cases': action.payload.today.todayCases,
                    'Today Deaths': action.payload.today.todayDeaths,
                    'Today Recovered': action.payload.today.todayRecovered,
                    critical: action.payload.today.critical,
                },
                loading: false,
                error: false,
            };
        case actionTypes.FETCHING_TODAY_GLOBAL_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload.error,
            };

        //- --------------------------------------------
        //- Yesterday Data
        case actionTypes.FETCHING_YESTERDAY_GLOBAL_DATA:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case actionTypes.FETCHING_YESTERDAY_GLOBAL_DATA_SUCCESS:
            return {
                ...state,

                globalData: {
                    ...state.globalData,
                    total_Cases: {
                        ...state.globalData.total_Cases,
                        totalYesterday: action.payload.yesterday.cases,
                    },
                    total_Deaths: {
                        ...state.globalData.total_Deaths,
                        totalYesterday: action.payload.yesterday.deaths,
                    },
                    total_Recovered: {
                        ...state.globalData.total_Recovered,
                        totalYesterday: action.payload.yesterday.recovered,
                    },
                    today_Cases: {
                        ...state.globalData.today_Cases,
                        totalYesterday: action.payload.yesterday.todayCases,
                    },
                    today_Deaths: {
                        ...state.globalData.today_Deaths,
                        totalYesterday: action.payload.yesterday.todayDeaths,
                    },
                    today_Recovered: {
                        ...state.globalData.today_Recovered,
                        totalYesterday: action.payload.yesterday.todayRecovered,
                    },
                },
                loading: false,
                error: false,
            };
        case actionTypes.FETCHING_YESTERDAY_GLOBAL_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload.error,
            };
        default:
            return state;
    }
};

export default globalDataReducer;
