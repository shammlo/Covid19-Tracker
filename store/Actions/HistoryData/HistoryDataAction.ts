//********** IMPORTS **********/
import { actionTypes } from '../actionTypes';
//********************************
type Data = {
    cases: number[];
    deaths: number[];
    recovered: number[];
};
export const historyData = {
    thisYear: {
        fetchHistoryData: (query: number) => {
            return {
                type: actionTypes.FETCHING_HISTORY_DATA_21,
                payload: {
                    query: query,
                },
            };
        },
        fetchHistoryDataSuccess: (data: Data) => {
            let cases: number[] = [];
            let deaths: number[] = [];
            let recovered: number[] = [];
            let dates: string[] = [];

            for (let newData in data.cases) {
                dates.push(newData);
                cases.push(data.cases[newData]);
            }
            for (let newData in data.deaths) {
                deaths.push(data.deaths[newData]);
            }
            for (let newData in data.recovered) {
                recovered.push(data.recovered[newData]);
            }

            return {
                type: actionTypes.FETCHING_HISTORY_DATA_21_SUCCESS,
                payload: {
                    twentyOneHist: {
                        cases: cases,
                        deaths: deaths,
                        recovered: recovered,
                        dates: dates,
                    },
                },
            };
        },
        fetchHistoryDataFailed: (err: any) => {
            return {
                type: actionTypes.FETCHING_HISTORY_DATA_21_FAIL,
            };
        },
    },

    allHistory: {
        fetchHistoryDataAll: () => {
            return {
                type: actionTypes.FETCHING_HISTORY_DATA_ALL,
            };
        },
        fetchHistoryDataAllSuccess: (data: Data) => {
            let allCases: number[] = [];
            let allDeaths: number[] = [];
            let allRecovered: number[] = [];
            let allDates: string[] = [];

            for (let newData in data.cases) {
                allDates.push(newData);
                allCases.push(data.cases[newData]);
            }
            for (let newData in data.deaths) {
                allDeaths.push(data.deaths[newData]);
            }
            for (let newData in data.recovered) {
                allRecovered.push(data.recovered[newData]);
            }

            return {
                type: actionTypes.FETCHING_HISTORY_DATA_ALL_SUCCESS,
                payload: {
                    allHistory: {
                        allCases: allCases,
                        allDeaths: allDeaths,
                        allRecovered: allRecovered,
                        allDates: allDates,
                    },
                },
            };
        },
        fetchHistoryDataAllFailed: (err: any) => {
            return {
                type: actionTypes.FETCHING_HISTORY_DATA_ALL_FAIL,
            };
        },
    },
};
