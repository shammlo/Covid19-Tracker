//********** IMPORTS **********/
import * as actions from '../../Actions/actions';
import { put } from 'redux-saga/effects';
import axios from 'axios';
//************************************

type Response = Object | unknown | any;
export function* fetchHistoryDataSaga(action: {
    payload: { query: number };
    type: string;
}): Generator {
    try {
        const response: Response = yield axios.get(
            `https://disease.sh/v3/covid-19/historical/all?lastdays=${
                action.payload.query ?? 'all'
            }`
        ) as object;
        yield put(actions.historyData.thisYear.fetchHistoryDataSuccess(response.data));
    } catch (err) {
        yield put(actions.historyData.thisYear.fetchHistoryDataFailed(err));
    }
}
export function* fetchHistoryDataAllSaga(): Generator {
    try {
        const response: Response = yield axios.get(
            `https://disease.sh/v3/covid-19/historical/all?lastdays=all`
        );
        yield put(actions.historyData.allHistory.fetchHistoryDataAllSuccess(response.data));
    } catch (err) {
        yield put(actions.historyData.allHistory.fetchHistoryDataAllFailed(err));
    }
}
