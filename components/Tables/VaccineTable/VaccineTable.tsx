//********** IMPORTS ************* */
import React, { forwardRef } from 'react';
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
    [key: string]: CandidateObj;
};
interface TableProps {
    candidatesData: CandidateArray;
}

const VaccineTable: React.FC<TableProps> = ({ candidatesData }) => {
    const candidates: any[] = [];
    if (candidatesData) {
        Object.keys(candidatesData).map((data: any) => {
            candidates.push({
                candidate: candidatesData[data].candidate,
                phase: candidatesData[data].trialPhase,
                mechanism: candidatesData[data].mechanism,
                sponsors: candidatesData[data].sponsors,
                institutions: candidatesData[data].institutions,
                details: candidatesData[data].details,
            });
        });
    }

    const columns: any = [
        {
            title: 'Candidate',
            field: 'candidate',
            cellStyle: {
                width: 200,
                maxWidth: 200,
            },
            headerStyle: {
                width: 200,
                maxWidth: 200,
            },
        },
        {
            title: 'Phase',
            field: 'phase',
            ...(true && ({ width: 20 } as object)),
            cellStyle: {
                width: 200,
                maxWidth: 200,
            },
            headerStyle: {
                width: 200,
                maxWidth: 200,
            },
        },
        {
            title: 'Mechanism',
            field: 'mechanism',
            align: 'left',
            cellStyle: {
                textAlign: 'left',
                // whiteSpace: 'nowrap',
            },
        },
        {
            title: 'Sponsors',
            field: 'sponsors',
        },
        {
            title: 'Institutions',
            field: 'institutions',
            cellStyle: {
                // whiteSpace: 'nowrap',
            },
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
            title="General Vaccine Candidates Info"
            icons={tableIcons}
            columns={columns}
            data={candidates}
            detailPanel={(rowData: any) => {
                // console.log(rowData);
                return <div className="table-details">{rowData.details}</div>;
            }}
            options={{
                draggable: false,
                emptyRowsWhenPaging: true, //to make page size fix in case of less data rows
                pageSizeOptions: [],
                headerStyle: {},
            }}
            localization={{
                pagination: {
                    labelRowsSelect: '',
                },
            }}
            onRowClick={(event, rowData, togglePanel: any) => togglePanel()}
        />
    );
};
//----------------------------------------------------------------

export default React.memo(VaccineTable);
