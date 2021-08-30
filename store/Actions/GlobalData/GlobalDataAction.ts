//********** IMPORTS **********/
import { actionTypes } from '../actionTypes';
//********************************

export const GlobalData = {
    today: {
        fetch_Today_GlobalData: () => {
            return {
                type: actionTypes.FETCHING_TODAY_GLOBAL_DATA,
            };
        },

        fetch_Today_GlobalData_Success: (data: object) => {
            return {
                type: actionTypes.FETCHING_TODAY_GLOBAL_DATA_SUCCESS,
                payload: {
                    today: data,
                },
            };
        },
        fetch_Today_GlobalData_Fail: (error: any) => {
            return {
                type: actionTypes.FETCHING_TODAY_GLOBAL_DATA_FAIL,
                payload: {
                    error: error,
                },
            };
        },
    },

    yesterday: {
        fetch_Yesterday_GlobalData: () => {
            return {
                type: actionTypes.FETCHING_YESTERDAY_GLOBAL_DATA,
            };
        },

        fetch_Yesterday_GlobalData_Success: (data: object) => {
            return {
                type: actionTypes.FETCHING_YESTERDAY_GLOBAL_DATA_SUCCESS,
                payload: {
                    yesterday: data,
                },
            };
        },
        fetch_Yesterday_GlobalData_Fail: (error: any) => {
            return {
                type: actionTypes.FETCHING_YESTERDAY_GLOBAL_DATA_FAIL,
                payload: {
                    error: error,
                },
            };
        },
    },
};
