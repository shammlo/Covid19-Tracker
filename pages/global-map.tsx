//********** IMPORTS ************* */
import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Wrapper from '../helpers/Hoc/Wrappers/Wrapper';
import { connect } from 'react-redux';
import { formatNumber, updatedTime } from '../helpers/Functions/HelperFunctions';
// import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

// mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken =
    'pk.eyJ1Ijoic2hhbXp4IiwiYSI6ImNrZzVsN3dmYTB2aGwydXA0cTRjYTNlOHIifQ.PJEx5stm9_rUjgRzFQaLFg';
//******************************** */
//* helper Function
const convertToGeoJSON = (res: object[]) => {
    var arr: object[] = [];
    var hitsArray = res ? res : [];
    hitsArray.forEach((data: any) => {
        const casesFormatted = formatNumber(data.cases);
        arr.push({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [data.countryInfo.long, data.countryInfo.lat],
            },
            properties: {
                text: data.country,
                flag: data.countryInfo.flag,
                cases: data.cases,
                deaths: data.deaths,
                recovered: data.recovered,
                active: data.active,
                formatCases: casesFormatted,
                updated: data.updated,
            },
        });
    });

    return {
        type: 'FeatureCollection',
        features: arr,
    };
};

//---------------------------------------------------------------
interface MapProps {
    countryInfo: object[];
}
const Map: React.FC<MapProps> = (props) => {
    const path = typeof document != 'undefined' && (document as any).location.pathname;

    const { countryInfo } = props;
    const mapContainer = useRef<HTMLDivElement>(null) as any;
    const [lng, setLng] = useState(-16.343);
    const [lat, setLat] = useState(32.757);
    const [zoom, setZoom] = useState(2.25);

    const geoResult: any = convertToGeoJSON(countryInfo);
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/shamzx/ckgtlhahs0m4y19pg0rwudv3p',
            center: [lng, lat],
            zoom: zoom,
        });
        //   map.addControl(
        //       new MapboxGeocoder({
        //           accessToken: mapboxgl.accessToken,
        //           mapboxgl: mapboxgl,
        //       })
        //   );
        map.addControl(new mapboxgl.NavigationControl());
        map.addControl(new mapboxgl.FullscreenControl());
        var colors = [
            '#fed976',
            '#51bbd6',
            '#52e374',
            '#feb24c',
            '#fd8d3c',
            '#fc4e2a',
            '#e31a1c',
            '#fc3f41',
        ];

        map.on('load', async () => {
            const total = ['get', 'cases'];
            const cases = ['>=', ['get', 'cases'], 1];
            const cases2 = ['<=', total, 100000];
            const cases3 = ['<=', total, 500000];
            const cases4 = ['<=', total, 1000000];
            const cases5 = ['<=', total, 5000000];
            // const cases4 = ["<=", ["get", "cases"], 1000];
            // const cases = [">=", ["get", "cases"], 1];
            //const totalCases = valueFormatter(cases);

            map.addSource('mapCases', {
                type: 'geojson',
                data: geoResult,
                cluster: true,
                clusterRadius: 15,
                clusterProperties: {
                    // keep separate counts for each magnitude category in a cluster
                    cases: ['+', ['case', cases, 1, 0]],
                    cases2: ['+', ['case', cases2, 1, 0]],
                    cases3: ['+', ['case', cases3, 1, 0]],
                    cases4: ['+', ['case', cases4, 1, 0]],
                    cases5: ['+', ['case', cases5, 1, 0]],
                },
                //     // keep separate counts for each magnitude category in a cluster
                //     cases: ["+", ["case", cases, 1, 0]],
                // },
            });
            const point_count = 'cases';

            map.addLayer({
                id: 'cluster',
                type: 'circle',
                source: 'mapCases',
                filter: ['!=', 'cluster', true],
                // ["!=", "cluster", true],
                paint: {
                    'circle-color': [
                        'case',

                        cases2,
                        '#52e374',
                        cases3,

                        '#51bbd6',
                        cases4,
                        colors[0],
                        cases5,
                        '#fc9c19',

                        colors[7],
                    ],

                    'circle-opacity': 0.6,
                    'circle-radius': 23,
                },
            });

            map.addLayer({
                id: 'cluster-count',
                type: 'symbol',
                source: 'mapCases',
                filter: ['!=', 'cluster', true],
                layout: {
                    'text-field': [
                        'format',

                        ['get', 'cases'],
                        { 'min-fraction-digits': 0, 'max-fraction-digits': 1 },
                    ],
                    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                    'text-size': 10,
                },
                paint: {
                    'text-color': ['case', ['>', ['get', 'cases'], 1], 'black', 'white'],
                },
            });
        });

        map.on('click', 'cluster', function (e: any) {
            var coordinates = e.features[0].geometry.coordinates.slice();
            var description = e.features[0].properties.text;
            let flag = e.features[0].properties.flag;
            let cases = formatNumber(e.features[0].properties.cases);
            let deaths = formatNumber(e.features[0].properties.deaths);
            let recovered = formatNumber(e.features[0].properties.recovered);
            let active = formatNumber(e.features[0].properties.active);
            let updated = updatedTime(e.features[0].properties.updated);

            //  if (path === '/arabic.html' || path === '/kurdish.html') {
            //      cases = formatNumber(e.features[0].properties.cases).toArabicDigits();
            //      deaths = formatNumber(e.features[0].properties.deaths).toArabicDigits();
            //      recovered = formatNumber(e.features[0].properties.recovered).toArabicDigits();
            //      active = formatNumber(e.features[0].properties.active).toArabicDigits();
            //      updated = updatedTime(e.features[0].properties.updated)
            //          .toString()
            //          .toArabicDigits();
            //  }

            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(
                    `

                    <div class="${
                        path === '/arabic.html' || path === '/kurdish.html'
                            ? 'map-popup--lang'
                            : 'map-popup'
                    }">
                        <div class="popup-header">
                        <img style="margin-left: .4rem;"
                                    src="img/virus-1.svg"
                                    width="25"
                                    height="25"
                                    class="d-inline-block align-top"
                                    alt="logo"
                                />
                            <h5  style="font-size: 1.7rem; margin-left: 1rem;">${(() => {
                                if (path === '/arabic.html') {
                                    return 'تـعـقـب كـوفـیـد-١٩';
                                } else if (path === '/kurdish.html') {
                                    return 'بـەدواداچـوونـی كـۆڤـیـد-١٩';
                                } else {
                                    return ' Covid-19 Tracker';
                                }
                            })()}</h5></div>
                        <div class="popup-title">
                            <span id="infoCountryLegend" style="margin-left: .4rem;"
                                >${description} &nbsp;&nbsp;
                                <img
                                    src="${flag}"
                                    style="max-width: 30px; height: auto"
                                    onerror="this.style.display='none'"
                                    onwidth="20"
                            /></span>
                            <span
                                id="${
                                    path === '/arabic.html' || path === '/kurdish.html'
                                        ? 'infoUpdatedLegend-lang'
                                        : 'infoUpdatedLegend'
                                }"
                                >
                                ${(() => {
                                    if (path == '/arabic.html') {
                                        return 'محدث';
                                    } else if (path === '/kurdish.html') {
                                        return 'تازەکراوەتەوە';
                                    } else {
                                        return 'Updated';
                                    }
                                })()} <span style="color: var(--warning);">${updated}</span>  ${(() => {
                        if (path == '/arabic.html') {
                            return 'دقائق مضت';
                        } else if (path === '/kurdish.html') {
                            return 'خولەک پێش ئێستا';
                        } else {
                            return 'minutes ago';
                        }
                    })()}</span>
                            <hr
                                style="
                                    border: 0.1rem solid rgb(212, 212, 212);
                                    width: 8vh;
                                    margin-top: 1vh;
                                    margin-bottom: 1vh;
                                "
                                align="left"
                            />
                        </div>
                        <article class="popup__data">
                            <div class="popup__data-cases">
                                <h5>${(() => {
                                    if (path == '/arabic.html') {
                                        return 'حـالـات';
                                    } else if (path == '/kurdish.html') {
                                        return 'توشبووان';
                                    } else {
                                        return 'Cases';
                                    }
                                })()}</h5>
                                <span>
                                    <img src="img/health.svg" alt="icon" width="22.5" height="22.5"
                                /></span>
                                <span id="popCase padTop">${cases}</span>
                            </div>
                            <div class="popup__data-deaths">
                                <h5> ${(() => {
                                    if (path == '/arabic.html') {
                                        return 'الـوفـاة';
                                    } else if (path == '/kurdish.html') {
                                        return 'قوربانیان';
                                    } else {
                                        return 'Deaths';
                                    }
                                })()}</h5>
                                <span>
                                    <img src="img/headstone.svg" alt="icon" width="22.5" height="22.5"
                                /></span>
                                <span id="popDead padTop" style="color: var(--danger)">${deaths}</span>
                            </div>
                            <div class="popup__data-recovered">
                                <h5> ${(() => {
                                    if (path == '/arabic.html') {
                                        return 'تـعـافـى';
                                    } else if (path == '/kurdish.html') {
                                        return 'چاکبووەوان';
                                    } else {
                                        return 'Recovered';
                                    }
                                })()}</h5>
                                <span>
                                    <img src="img/heartbeat.svg" alt="icon" width="22.5" height="22.5"
                                /></span>
                                <span id="popRec padTop" style="color: var(--success)">${recovered}</span>
                            </div>
                            <div class="popup__data-active" >
                                <h5> ${(() => {
                                    if (path == '/arabic.html') {
                                        return 'الـمـصـابـة حـالـيـا';
                                    } else if (path == '/kurdish.html') {
                                        return 'حاڵەتە چەڵاکەکان';
                                    } else {
                                        return 'Active';
                                    }
                                })()}</h5>
                                <span>
                                <span id="popAct padTop">${active}</span>
                                    <img
                                        src="img/safety-suit.svg"
                                        alt="icon"
                                        width="22.5"
                                        height="22.5"
                                /></span>
                            </div>
                        </article>
                    </div>
        `
                )
                .addTo(map);
        });
        map.on('mouseenter', 'cluster', function () {
            map.getCanvas().style.cursor = 'pointer';
        });
        map.on('mouseleave', 'cluster', function () {
            map.getCanvas().style.cursor = '';
        });
        //- remove
        return () => map.remove();
    }, []);
    return (
        <>
            <Head>
                {/* <link rel="shortcut icon" href="/virus-1.svg" /> */}
                <title>Map - Covid-19 Tracker</title>
            </Head>

            <section className="about-data about-data-content">
                <Wrapper class="card">
                    <Wrapper class="card-header">Global Map</Wrapper>
                    <Wrapper class="card-body map-container pt-n">
                        <div className="main-map" ref={mapContainer} />
                        <Wrapper id="state-legend" class="legend">
                            <h2 className="legend__title">Total Cases</h2>
                            <Wrapper>
                                <span style={{ backgroundColor: '#fc3f41' }}></span>more than 5M
                            </Wrapper>
                            <Wrapper>
                                <span style={{ backgroundColor: '#fc9c19' }}></span>Between 1M to 5M
                            </Wrapper>
                            <Wrapper>
                                <span style={{ backgroundColor: '#fed976' }}></span>Between 500K to
                                1M
                            </Wrapper>
                            <Wrapper>
                                <span style={{ backgroundColor: '#51bbd6' }}></span>Between 100K to
                                500K
                            </Wrapper>
                            <Wrapper>
                                <span style={{ backgroundColor: '#52e374' }}></span>Less than 100K
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </section>
        </>
    );
};
//----------------------------------------------------------------

const mapStateToProps = (state: any) => ({
    countryInfo: state.CountriesData.countriesData,
});

export default connect(mapStateToProps)(Map);
