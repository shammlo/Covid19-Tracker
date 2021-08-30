import { CountriesData } from './../../Actions/CountriesData/CountriesDataAction';
//********** IMPORTS **********/
import { actionTypes } from '../../Actions/actionTypes';
//************************************

type countriesDataType = {
    [key: string]: object;
};
interface ActionTypes {
    type: string;
    payload: {
        countriesData: countriesDataType;
        countriesDataError: object;
    };
}
//----------------------------------------------------------------
//* initial state
const initialState = {
    countriesData: null,
    errors: null,
};
//----------------------------------------------------------------

const countriesDataReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case actionTypes.FETCHING_COUNTRIES_DATA:
            return {
                ...state,
            };
        case actionTypes.FETCHING_COUNTRIES_DATA_SUCCESS:
            return {
                ...state,
                countriesData: action.payload.countriesData,
            };
        case actionTypes.FETCHING_COUNTRIES_DATA_FAIL:
            return {
                ...state,
                error: action.payload.countriesDataError,
            };
        default:
            return state;
    }
};

export default countriesDataReducer;
