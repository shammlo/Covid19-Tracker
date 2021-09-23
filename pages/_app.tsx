//********** IMPORTS ************* */
import '../styles/Sass/main.scss';
import Layout from '../Layout/Layout';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import historyDataReducer from '../store/Reducers/HistoryData/HistoryDataReducer';
import GlobalDataReducer from '../store/Reducers/GlobalData/GlobalDataReducer';
import VaccineDataReducer from '../store/Reducers/Vaccine/VaccineReducer';
import CountriesDataReducer from '../store/Reducers/CountriesData/CountriesDataReducer';
import {
    watchHistoryData,
    watchGlobalData,
    watchVaccineData,
    watchCountriesData,
} from '../store/Sagas/saga';
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
// console.log(process.env.NODE_ENV);
let composeEnhancers = compose;
if (process.env.NODE_ENV === 'development') {
    console.log('Development Mode');
    composeEnhancers =
        (typeof window != 'undefined' && (window as any)).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
        compose;
}

// console.log(process.env);

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
