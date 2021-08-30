//********** IMPORTS **********/
import { actionTypes } from '../actionTypes';
//********************************

export const VaccineData = {
    fetch_vaccine_data: () => {
        return {
            type: actionTypes.FETCHING_VACCINE_DATA,
        };
    },
    fetch_vaccine_data_success: (data: object) => {
        return {
            type: actionTypes.FETCHING_VACCINE_DATA_SUCCESS,
            payload: {
                vaccine: data,
            },
        };
    },
    fetch_vaccine_data_fail: (error: any) => {
        return {
            type: actionTypes.FETCHING_VACCINE_DATA_FAIL,
            payload: {
                vaccineError: error,
            },
        };
    },
};
