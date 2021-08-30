//********** IMPORTS **********/
import { actionTypes } from '../../Actions/actionTypes';
//************************************
type dataObjectType = {
    [key: string]: object;
};
interface ActionTypes {
    type: string;
    payload: {
        vaccine: {
            source: string;
            totalCandidates: string;
            phases: object[];
            data: dataObjectType;
        };

        vaccineError: { errorMessage: string };
    };
}

//----------------------------------------------------------------
//* initial state
const initialState = {
    source: null,
    totalCandidates: null,
    phases: null,
    loading: false,
    error: false,
    errorMessage: null,
    candidateData: null,
};
//----------------------------------------------------------------

const vaccineReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case actionTypes.FETCHING_VACCINE_DATA:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case actionTypes.FETCHING_VACCINE_DATA_SUCCESS:
            return {
                ...state,
                source: action.payload.vaccine.source,
                totalCandidates: action.payload.vaccine.totalCandidates,
                phases: action.payload.vaccine.phases,
                candidateData: action.payload.vaccine.data,
                loading: false,
                error: false,
            };
        case actionTypes.FETCHING_VACCINE_DATA_FAIL:
            return {
                loading: false,
                error: true,
                errorMessage: action.payload.vaccineError.errorMessage,
            };
        default:
            return state;
    }
};

export default vaccineReducer;
