//********** IMPORTS ************* */
import React from 'react';
import Head from 'next/head';
import Wrapper from '../helpers/Hoc/Wrappers/Wrapper';
// import VaccineTable from '../../../components/Tables/VaccineTable/VaccineTable';
// import VaccineTable from '../../../components/Tables/VaccineTable/VaccineTable';
import dynamic from 'next/dynamic';
import SVGIcons from '../components/Icons/Icons';
import { connect } from 'react-redux';
import LoadingSpinner from '../helpers/LoadingSpinner/LoadingIndicator';
const VaccineTable = dynamic(() => import('../components/Tables/VaccineTable/VaccineTable'));

//******************************** */
type CandidateObj = {
    candidate: string;
    details: string;
    institutions: string[];
    mechanism: string;
    sponsors: string[];
    trialPhase: string;
};

type CandidateArray = {
    [key: string]: CandidateObj;
};

interface VaccineProps {
    candidatesData: CandidateArray;
}
const Vaccine: React.FC<VaccineProps> = ({ candidatesData }) => {
    return (
        <>
            <Head>
                {/* <link rel="shortcut icon" href="/virus-1.svg" /> */}
                <title>Vaccine - Covid-19 </title>
            </Head>

            <section className="vaccine-page vaccine-content">
                <Wrapper class="card">
                    <Wrapper class="card-header">
                        <Wrapper
                            class="card-header--icon mr-1"
                            dataType="icon"
                            ariaLabel="image icon"
                        >
                            <SVGIcons title="vaccine shield" />
                        </Wrapper>
                        <h3 className="card-header--text"> Vaccine Data</h3>
                    </Wrapper>

                    {/* <VaccineTable /> */}

                    <Wrapper class="card-body p-n">
                        {candidatesData ? (
                            <VaccineTable candidatesData={candidatesData} />
                        ) : (
                            <Wrapper class="d-flex jc-c">
                                <LoadingSpinner />
                            </Wrapper>
                        )}
                    </Wrapper>
                </Wrapper>
            </section>
        </>
    );
};
//----------------------------------------------------------------
const mapStateToProps = (state: any) => ({
    candidatesData: state.VaccineData.candidateData,
});

export default connect(mapStateToProps)(Vaccine);
