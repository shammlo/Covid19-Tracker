//********** IMPORTS **********/
import { actionTypes } from '../actionTypes';
//************************************

export const CountriesData = {
    fetching_CountriesData: () => {
        return {
            type: actionTypes.FETCHING_COUNTRIES_DATA,
        };
    },
    fetching_Countries_Data_Success: (data: any) => {
        return {
            type: actionTypes.FETCHING_COUNTRIES_DATA_SUCCESS,
            payload: {
                countriesData: data,
            },
        };
    },
    fetching_Countries_Data_Fail: (error: any) => {
        return {
            type: actionTypes.FETCHING_COUNTRIES_DATA_FAIL,
            payload: {
                countriesDataError: error,
            },
        };
    },
};
