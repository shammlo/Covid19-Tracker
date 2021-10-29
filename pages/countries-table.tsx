//********** IMPORTS ************* */
import React from 'react';
import Head from 'next/head';
import Wrapper from '../helpers/Hoc/Wrappers/Wrapper';
import SVGIcons from '../components/Icons/Icons';
import { connect } from 'react-redux';
import CountryTable from '../components/Tables/CountryTable/CountryTable';
//******************************** */

type countriesDataObject = {
    [key: string]: {};
};
type globalDataObject = {
    cases: number;
    deaths: number;
    critical: number;
    recovered: number;
    todayCases: number;
    todayDeaths: number;
    todayRecovered: number;
    active: number;
};
interface TablesProps {
    countriesData: countriesDataObject;
    globalData: globalDataObject;
}
const Tables: React.FC<TablesProps> = ({ countriesData, globalData }) => {
    return (
        <>
            <Head>
                <title>Countries Tables - Covid-19</title>
            </Head>

            <section className="tables-page tables-content">
                <Wrapper class="chart-info cards-container">
                    <Wrapper class="card flex-100">
                        <Wrapper class="card-header">
                            <Wrapper
                                class="card-header--icon mr-1"
                                dataType="icon"
                                ariaLabel="image icon"
                            >
                                <SVGIcons title="data table" />
                            </Wrapper>
                            <h3 className="card-header--text">Countries Data Table </h3>
                        </Wrapper>

                        <CountryTable countriesData={countriesData} globalData={globalData} />
                        {/* <Table candidatesData={candidatesData} /> */}
                    </Wrapper>
                </Wrapper>
            </section>
        </>
    );
};
//----------------------------------------------------------------
const mapStateToProps = (state: any) => ({
    countriesData: state.CountriesData.countriesData,
    globalData: state.GlobalData.allGlobalData,
});

export default connect(mapStateToProps)(Tables);
