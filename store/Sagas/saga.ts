//********** IMPORTS ************* */
import { takeEvery } from 'redux-saga/effects';
import { actionTypes } from '../Actions/actionTypes';
import { fetchHistoryDataSaga, fetchHistoryDataAllSaga } from './HistoryData/HistoryDataSaga';
import { fetchingTodayGlobalData, fetchingYesterdayGlobalData } from './GlobalData/GlobalDataSaga';
import { fetchVaccineData } from './Vaccine/VaccineSaga';
import { fetchingCountriesData } from './CountriesData/CountriesDataSaga';
//******************************** */

export function* watchHistoryData(): Generator {
    yield takeEvery(actionTypes.FETCHING_HISTORY_DATA_21, fetchHistoryDataSaga);
    yield takeEvery(actionTypes.FETCHING_HISTORY_DATA_ALL, fetchHistoryDataAllSaga);
}
export function* watchGlobalData(): Generator {
    yield takeEvery(actionTypes.FETCHING_TODAY_GLOBAL_DATA, fetchingTodayGlobalData);
    yield takeEvery(actionTypes.FETCHING_YESTERDAY_GLOBAL_DATA, fetchingYesterdayGlobalData);
}

export function* watchVaccineData(): Generator {
    yield takeEvery(actionTypes.FETCHING_VACCINE_DATA, fetchVaccineData);
}

export function* watchCountriesData(): Generator {
    yield takeEvery(actionTypes.FETCHING_COUNTRIES_DATA, fetchingCountriesData);
}
