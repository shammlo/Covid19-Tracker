//********** IMPORTS ************* */
import React, { forwardRef, useState } from 'react';
// import MaterialTable from 'material-table';
import dynamic from 'next/dynamic';
const MaterialTable = dynamic(() => import('material-table'));
import {
    ArrowDownward,
    Search,
    FirstPage,
    LastPage,
    Clear,
    ChevronLeft,
    ChevronRight,
    // SortArrow,
} from '@material-ui/icons';
// import ArrowDownward from '@material-ui/icons/ArrowDownward';
import { SvgIconProps } from '@material-ui/core';
import { numberWithCommas } from '../../../helpers/Functions/HelperFunctions';
import SVGIcons from '../../Icons/Icons';
//******************************** */
type forWardType = SVGSVGElement & SvgIconProps;

type CandidateObj = {
    candidate: string;
    details: string;
    institutions: string[];
    mechanism: string;
    sponsors: string[];
    trialPhase: string;
};
type CandidateArray = {
    [key: string]: any & {};
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
interface TableProps {
    countriesData: CandidateArray;
    globalData: globalDataObject;
}

const CountryTable: React.FC<TableProps> = ({ countriesData, globalData }) => {
    const [selectedRow, setSelectedRow] = useState(null);
    // const bodyClass =
    //     typeof document != 'undefined' &&
    //     ((document as any)
    //         .querySelector('body')
    //         .classList.contains('light-theme') as HTMLElement | null);

    const candidates: any[] = [];
    if (countriesData && globalData) {
        const global = {
            rank: 0,
            flag: '/images/worldwide.png',
            country: 'Global',
            cases: numberWithCommas(globalData.cases),
            deaths: numberWithCommas(globalData.deaths),
            critical: numberWithCommas(globalData.critical),
            recovered: numberWithCommas(globalData.recovered),
            todayCases: globalData.todayCases,
            todayDeaths: globalData.todayDeaths,
            todayRecovered: globalData.todayRecovered,
            activeCases: numberWithCommas(globalData.active),
        };
        Object.keys(countriesData).map((data: any) => {
            candidates.push({
                rank: data + 1,
                flag: countriesData[data].countryInfo.flag,
                country: countriesData[data].country,
                cases: numberWithCommas(countriesData[data].cases),
                deaths: numberWithCommas(countriesData[data].deaths),
                critical: numberWithCommas(countriesData[data].critical),
                recovered: numberWithCommas(countriesData[data].recovered),
                todayCases: countriesData[data].todayCases,
                todayDeaths: countriesData[data].todayDeaths,
                todayRecovered: countriesData[data].todayRecovered,
                activeCases: numberWithCommas(countriesData[data].active),
            });
        });
        candidates.unshift(global);
    }

    const columns: any = [
        {
            title: 'Rank',
            field: 'rank',
            cellStyle: {
                width: 80,
                maxWidth: 80,
            },
            headerStyle: {
                width: 80,
                maxWidth: 80,
            },
            render: (rowData: any) => rowData.tableData.id + 1,
        },
        {
            title: 'Country',
            field: 'country',
            ...(true && ({ width: 20 } as object)),
            cellStyle: {
                width: 200,
                maxWidth: 200,
            },
            headerStyle: {
                width: 200,
                maxWidth: 200,
            },
            render: (rowData: any) => {
                if (rowData.country === 'Global') {
                    return (
                        <div className="country-info">
                            <div className="table-flag" style={{ height: '2rem' }}>
                                <img
                                    src={rowData.flag}
                                    className="table-flag-img"
                                    alt="Country Image"
                                />
                            </div>
                            <h3 className="country-info-name">{rowData.country}</h3>
                        </div>
                    );
                }
                return (
                    <div className="country-info">
                        <div className="table-flag">
                            <img
                                src={rowData.flag}
                                className="table-flag-img"
                                alt="Country Image"
                            />
                        </div>
                        <h3 className="country-info-name">{rowData.country}</h3>
                    </div>
                );
            },
        },
        {
            title: 'Cases',
            field: 'cases',
            align: 'left',
            cellStyle: {
                textAlign: 'left',
                // whiteSpace: 'nowrap',
            },
        },
        {
            title: 'Deaths',
            field: 'deaths',
        },
        {
            title: 'Critical',
            field: 'critical',
            cellStyle: {},
        },
        {
            title: 'Recovered',
            field: 'recovered',
            cellStyle: {},
        },
        {
            title: "Today's Cases",
            field: 'todayCases',
            // cellStyle: (rowData: any) => {

            //     if (rowData.todayCases > 0) {
            //         return { backgroundColor: 'red' };
            //     }
            // },
            cellStyle: (data: any, rowData: any) => {
                if (rowData.todayCases > 0) {
                    return {
                        color: 'var(--c-table-cases)',
                        // color: ' var(--color-black)',
                        fontWeight: '400',
                        letterSpacing: '0.7px',
                    };
                }
            },
            render: (rowData: any) => {
                if (rowData.todayCases > 0) {
                    return (
                        <div className="d-flex ai-c">
                            <div style={{ width: '2rem', height: '2rem', marginRight: '0.5rem' }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className={`svg-icon svg-r`}
                                >
                                    <path
                                        d="M1.41421 16.4322L0 15.018L7.07107 7.94693L13.435 14.3109L17.6777 10.0682L15.9353 8.32587L22.6274 6.53271L20.8343 13.2248L19.0919 11.4825L13.435 17.1393L7.07107 10.7754L1.41421 16.4322Z"
                                        fill="var(--c-table-cases)"
                                    />
                                </svg>
                            </div>
                            {numberWithCommas(rowData.todayRecovered)}
                        </div>
                    );
                } else {
                    return numberWithCommas(rowData.todayCases);
                }
            },
        },
        {
            title: "Today's Deaths",
            field: 'todayDeaths',
            cellStyle: (data: any, rowData: any) => {
                if (rowData.todayDeaths > 0) {
                    return {
                        color: '#e46964',
                        // color: ' var(--color-white)',
                        fontWeight: '600',
                        letterSpacing: '0.7px',
                    };
                }
            },
            render: (rowData: any) => {
                if (rowData.todayDeaths > 0) {
                    return (
                        <div className="d-flex ai-c">
                            <div style={{ width: '2rem', height: '2rem', marginRight: '0.5rem' }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className={`svg-icon svg-r`}
                                >
                                    <path
                                        d="M1.41421 16.4322L0 15.018L7.07107 7.94693L13.435 14.3109L17.6777 10.0682L15.9353 8.32587L22.6274 6.53271L20.8343 13.2248L19.0919 11.4825L13.435 17.1393L7.07107 10.7754L1.41421 16.4322Z"
                                        fill="#e46964"
                                    />
                                </svg>
                            </div>
                            {numberWithCommas(rowData.todayRecovered)}
                        </div>
                    );
                } else {
                    return numberWithCommas(rowData.todayDeaths);
                }
            },
        },
        {
            title: "Today's Recovered",
            field: 'todayRecovered',
            cellStyle: (data: any, rowData: any) => {
                if (rowData.todayRecovered > 0) {
                    return {
                        color: '#6ddd87',
                        // color: ' var(--color-black)',
                        // fontWeight: '700 !important',
                        fontWeight: '400',
                        letterSpacing: '0.7px',
                    };
                }
            },
            render: (rowData: any) => {
                if (rowData.todayRecovered > 0) {
                    return (
                        <div className="d-flex ai-c">
                            <div style={{ width: '2rem', height: '2rem', marginRight: '0.5rem' }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className={`svg-icon svg-r`}
                                >
                                    <path
                                        d="M1.41421 16.4322L0 15.018L7.07107 7.94693L13.435 14.3109L17.6777 10.0682L15.9353 8.32587L22.6274 6.53271L20.8343 13.2248L19.0919 11.4825L13.435 17.1393L7.07107 10.7754L1.41421 16.4322Z"
                                        fill="#6ddd87"
                                    />
                                </svg>
                            </div>
                            {numberWithCommas(rowData.todayRecovered)}
                        </div>
                    );
                } else {
                    return numberWithCommas(rowData.todayRecovered);
                }
            },
        },
        {
            title: 'Active Cases',
            field: 'activeCases',
            cellStyle: {},
        },
    ];
    //--------------------------------------------------------
    //- Icons
    const tableIcons: any = {
        // Add: forwardRef<forWardType>((props, ref) => <AddBox {...props} ref={ref} />),
        // Check: forwardRef<forWardType>((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef<forWardType>((props, ref) => <Clear {...props} ref={ref} />),
        // Delete: forwardRef<forWardType>((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef<forWardType>((props, ref) => <ChevronRight {...props} ref={ref} />),
        // Edit: forwardRef<forWardType>((props, ref) => <Edit {...props} ref={ref} />),
        // Export: forwardRef<forWardType>((props, ref) => <SaveAlt {...props} ref={ref} />),
        // Filter: forwardRef<forWardType>((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef<forWardType>((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef<forWardType>((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef<forWardType>((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef<forWardType>((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef<forWardType>((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef<forWardType>((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef<forWardType>((props, ref) => <ArrowDownward {...props} ref={ref} />),
    };

    //----------------------------------------------------------------
    //- Return
    return (
        <MaterialTable
            title="Global Info"
            icons={tableIcons}
            columns={columns}
            data={candidates}
            // detailPanel={(rowData: any) => {
            //     console.log(rowData);
            //     return <div className="table-details">{rowData.details}</div>;
            // }}
            options={{
                draggable: false,
                emptyRowsWhenPaging: true, //to make page size fix in case of less data rows
                pageSizeOptions: [],
                headerStyle: {},
                pageSize: 10,
                rowStyle: (rowData) => {
                    // if(rowData.todayCases > 0){
                    //     return {backgroundColor: ''}
                    // }
                    // let rowClass = '#262b3b';
                    // if (bodyClass) {
                    // }
                    return {
                        // color: '#b4b7bd',
                        color: selectedRow === rowData.tableData.id ? '#c6c9cf' : 'inherit',
                        letterSpacing: '1px',
                        backgroundColor:
                            selectedRow === rowData.tableData.id ? '#3a4469' : 'transparent',
                    };
                },
            }}
            localization={{
                pagination: {
                    labelRowsSelect: '',
                },
            }}
            onRowClick={(evt, selectedRow: any) => setSelectedRow(selectedRow.tableData.id)}

            // onRowClick={(event, rowData, togglePanel: any) => togglePanel()}
        />
    );
};
//----------------------------------------------------------------

export default React.memo(CountryTable);
