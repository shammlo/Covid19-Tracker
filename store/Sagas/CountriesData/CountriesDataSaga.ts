//********** IMPORTS **********/
import * as actions from '../../Actions/actions';
import { put } from 'redux-saga/effects';
import axios from 'axios';
//************************************

export function* fetchingCountriesData(): any {
    try {
        const response = yield axios.get(
            'https://disease.sh/v3/covid-19/countries?yesterday=false&twoDaysAgo=false&sort=cases'
        );
        console.log(response.data);
        yield put(actions.CountriesData.fetching_Countries_Data_Success(response.data));
    } catch (error) {
        console.error(error);
        yield put(actions.CountriesData.fetching_Countries_Data_Fail(error));
    }
}
