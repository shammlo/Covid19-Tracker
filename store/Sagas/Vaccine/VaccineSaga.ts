//********** IMPORTS **********/
import { put } from 'redux-saga/effects';
import * as actions from '../../Actions/actions';

import axios from 'axios';
//************************************
export function* fetchVaccineData(): any {
    try {
        const response = yield axios.get('https://disease.sh/v3/covid-19/vaccine');

        // console.log(response.data);
        yield put(actions.VaccineData.fetch_vaccine_data_success(response.data));
    } catch (error) {
        yield put(actions.VaccineData.fetch_vaccine_data_fail(error));
    }
}
