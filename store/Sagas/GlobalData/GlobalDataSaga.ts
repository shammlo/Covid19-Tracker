//********** IMPORTS **********/
import * as actions from '../../Actions/actions';
import { put } from 'redux-saga/effects';
import axios from 'axios';
//************************************

export function* fetchingTodayGlobalData(): any {
    try {
        const response = yield axios.get(
            'https://disease.sh/v3/covid-19/all?yesterday=false&twoDaysAgo=false'
        );
        yield put(actions.GlobalData.today.fetch_Today_GlobalData_Success(response.data));
    } catch (error) {
        console.error(error);
        yield put(actions.GlobalData.today.fetch_Today_GlobalData_Fail(error));
    }
}
export function* fetchingYesterdayGlobalData(): any {
    try {
        const response = yield axios.get(
            'https://disease.sh/v3/covid-19/all?yesterday=true&twoDaysAgo=false'
        );
        yield put(actions.GlobalData.yesterday.fetch_Yesterday_GlobalData_Success(response.data));
    } catch (error) {
        yield put(actions.GlobalData.yesterday.fetch_Yesterday_GlobalData_Fail(error));
    }
}
