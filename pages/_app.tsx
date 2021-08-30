//********** IMPORTS ************* */
import '../styles/Sass/main.scss';
import Layout from '../Layout/Layout';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import historyDataReducer from '../Store/Reducers/HistoryData/HistoryDataReducer';
import GlobalDataReducer from '../Store/Reducers/GlobalData/GlobalDataReducer';
import VaccineDataReducer from '../Store/Reducers/Vaccine/VaccineReducer';
import CountriesDataReducer from '../Store/Reducers/CountriesData/CountriesDataReducer';
import {
    watchHistoryData,
    watchGlobalData,
    watchVaccineData,
    watchCountriesData,
} from '../Store/Sagas/saga';
import Head from 'next/head';
//******************************** */
//* MANAGING STORE

const mainReducer = combineReducers({
    historyData: historyDataReducer,
    GlobalData: GlobalDataReducer,
    VaccineData: VaccineDataReducer,
    CountriesData: CountriesDataReducer,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    (typeof window != 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const store = createStore(mainReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchHistoryData);
sagaMiddleware.run(watchGlobalData);
sagaMiddleware.run(watchVaccineData);
sagaMiddleware.run(watchCountriesData);
//----------------------------------------------------------------
function MyApp({ Component, pageProps }: any) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <link rel="shortcut icon" href="images/virus-1.svg" />
            </Head>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </>
    );
}
//----------------------------------------------------------------

export default MyApp;
