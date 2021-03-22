//********** IMPORTS ************* */
import React from 'react';
import Head from 'next/head';
//******************************** */
const AboutData = () => {
    return (
        <>
            <Head>
                {/* <link rel="shortcut icon" href="/virus-1.svg" /> */}
                <title>Covid-19 Tracker About Data</title>
            </Head>
            <div className="home">
                {' '}
                <div className="page" style={{ marginBottom: '1rem' }}>
                    <h1>Hi this is About Data page</h1>
                </div>
            </div>
        </>
    );
};

export default AboutData;
