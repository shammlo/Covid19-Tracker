//********** IMPORTS ************* */
import React from 'react';
import Head from 'next/head';
import Wrapper from '../helpers/Hoc/Wrappers/Wrapper';
import SVGIcons from '../components/Icons/Icons';
import ButtonLink from '../helpers/Hoc/Buttons/ButtonLink';
//******************************** */
interface AboutDataProps {}

const AboutData: React.FC<AboutDataProps> = () => {
    //----------------------------------------------------------------
    return (
        <>
            <Head>
                {/* <link rel="shortcut icon" href="/virus-1.svg" /> */}
                <title>About Data - Covid-19</title>
            </Head>

            <section className="about-data about-data-content">
                <Wrapper class="about-info cards-container">
                    <Wrapper class="card flex-50">
                        <Wrapper class="card-header">
                            <Wrapper
                                class="card-header--icon mr-1"
                                dataType="icon"
                                ariaLabel="image icon"
                            >
                                <SVGIcons title="about data" />
                            </Wrapper>
                            <h3 className="card-header--text">About data</h3>
                        </Wrapper>
                        <Wrapper class="card-body pt-n">
                            <Wrapper class="card-body-content">
                                <Wrapper class="aboutData">
                                    <ul className="aboutData__list">
                                        <li className="aboutData__item">
                                            <span className="aboutData__item--point list-point"></span>
                                            <Wrapper class="aboutData__item-wrapper">
                                                <span className="aboutData__item--title">
                                                    It changes rapidly
                                                </span>
                                                <p className="aboutData__item--text">
                                                    This data updates around every 10-20 minutes by
                                                    Greenwich Mean Time (GMT), and might not reflect
                                                    some cases that are still being reported.
                                                </p>
                                            </Wrapper>
                                        </li>
                                        <li className="aboutData__item">
                                            <span className="aboutData__item--point list-point"></span>
                                            <Wrapper class="aboutData__item-wrapper">
                                                <span className="aboutData__item--title">
                                                    It only includes people tested
                                                </span>
                                                <p className="aboutData__item--text">
                                                    Numbers are based on official estimates, which
                                                    may not account for unverified cases in
                                                    countries lacking the proper infrastructure to
                                                    diagnose patients.
                                                </p>
                                            </Wrapper>
                                        </li>
                                        <li className="aboutData__item">
                                            <span className="aboutData__item--point list-point"></span>
                                            <Wrapper class="aboutData__item-wrapper">
                                                <span className="aboutData__item--title">
                                                    There may be discrepancies from other sources
                                                </span>
                                                <p className="aboutData__item--text">
                                                    The data is taken from an api source, which
                                                    aggregates coronavirus data from over 13
                                                    sources. When there is a discrepancy, they
                                                    report the higher infected/recovered/deceased
                                                    count. These sources update at different times
                                                    and may have different ways of gathering data
                                                    regarding of that some data of specific
                                                    countries might be delayed.
                                                </p>
                                            </Wrapper>
                                        </li>
                                    </ul>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper class="card flex-50">
                        <Wrapper class=" card-header">
                            <Wrapper
                                class="card-header--icon mr-1"
                                dataType="icon"
                                ariaLabel="image icon"
                            >
                                <SVGIcons title="about data" />
                            </Wrapper>
                            <h3 className="card-header--text">About data</h3>
                        </Wrapper>
                        <Wrapper class="card-body pt-n">
                            <Wrapper class="card-body-content">
                                <Wrapper class="aboutData">
                                    <ul className="aboutData__list">
                                        <li className="aboutData__item">
                                            <span className="aboutData__item--point list-point"></span>
                                            <Wrapper class="aboutData__item-wrapper">
                                                <span className="aboutData__item--title">
                                                    The sources are not actively monitored
                                                </span>
                                                <p className="aboutData__item--text">
                                                    A change in a source may result in inaccurate/no
                                                    data being reported for the associated region.
                                                </p>
                                            </Wrapper>
                                        </li>
                                        <li className="aboutData__item">
                                            <span className="aboutData__item--point list-point"></span>
                                            <Wrapper class="aboutData__item-wrapper">
                                                <span className="aboutData__item--title">
                                                    Vaccine Data
                                                </span>
                                                <p className="aboutData__item--text">
                                                    The Vaccine Data is provided with the following
                                                    information, Candidates, Candidates background,
                                                    mechanism, phase, sponsors, and institutions.
                                                </p>
                                            </Wrapper>
                                        </li>
                                        <li className="aboutData__item">
                                            <span className="aboutData__item--point list-point"></span>
                                            <Wrapper class="aboutData__item-wrapper">
                                                <span className="aboutData__item--title">
                                                    About Api
                                                </span>
                                                <span className="aboutData__item--text">
                                                    <p className="fc-in mb-1">
                                                        The data is provided by NovelCOVID API
                                                        disease.sh, that is collected from sources
                                                        like GOV.UK, CanadaGOV, Worldometer, and 10
                                                        more, Get the data:
                                                    </p>
                                                    <ButtonLink
                                                        href="https://disease.sh/"
                                                        class="btn btn__norm"
                                                        target
                                                    >
                                                        Disease.sh
                                                    </ButtonLink>
                                                </span>
                                            </Wrapper>
                                        </li>
                                    </ul>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </section>
        </>
    );
};

export default AboutData;
