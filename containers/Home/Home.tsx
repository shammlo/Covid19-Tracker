//********** IMPORTS ************* */
import React from 'react';
import Head from 'next/head';
import CardData from '../../components/Cards/DataCard/DataCard';
//******************************** */

const Home = () => {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/virus-1.svg" />
                <title>Home</title>
            </Head>
            <div className="home">
                <div className="home-content" style={{ marginBottom: '1rem' }}>
                    <h1>Hi this is Home page</h1>
                </div>
                <CardData />
            </div>
        </>
    );
};

export default Home;
