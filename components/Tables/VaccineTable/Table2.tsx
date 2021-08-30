//********** IMPORTS ************* */
import React, { useState } from 'react';
// import MaterialTable from 'material-table';
// import dynamic from 'next/dynamic';
// const MaterialTable = dynamic(() => import('material-table'));
import DataTable, { createTheme } from 'react-data-table-component';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import styled from 'styled-components';
import Button from '../../../helpers/Hoc/Buttons/Button';
const sortIcon = <ArrowDownward />;
//******************************** */

interface TableProps {}
createTheme('solarized', {
    text: {
        primary: '#283046',
        secondary: '#2aa198',
    },
    background: {
        default: '#283046',
    },
    context: {
        background: '#283046',
        text: '#FFFFFF',
    },
    divider: {
        default: '#073642',
    },
    action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
    },
});
const TextField = styled.input`
    height: 32px;
    width: 200px;
    border-radius: 3px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid #e5e5e5;
    padding: 0 32px 0 16px;

    &:hover {
        cursor: pointer;
    }
`;
const ClearButton = styled.button`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 34px;
    width: 32px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const data = [
    {
        id: 1,
        title: 'Conan the Barbarian',
        summary: 'Orphaned boy Conan is enslaved after his village is destroyed...',
        year: '1982',
        image: 'http://conan.image.png',
    },
    {
        id: 2,
        title: 'Conan the Barbarian',
        summary: 'Orphaned boy Conan is enslaved after his village is destroyed...',
        year: '1982',
        image: 'http://conan.image.png',
    },
    {
        id: 3,
        title: 'Conan the Barbarian',
        summary: 'Orphaned boy Conan is enslaved after his village is destroyed...',
        year: '1982',
        image: 'http://conan.image.png',
    },
    {
        id: 4,
        title: 'Conan the Barbarian',
        summary: 'Orphaned boy Conan is enslaved after his village is destroyed...',
        year: '1982',
        image: 'http://conan.image.png',
    },
];
const columns = [
    {
        name: 'Title',
        sortable: true,
        cell: (row: any) => (
            <div className="shammm">
                <div style={{ fontWeight: 700 }}>{row.title}</div>
                {row.summary}
            </div>
        ),
    },
    {
        name: 'Year',
        selector: 'year',
        sortable: true,
        // right: true,
    },
];

const ExpandableComponent = ({ data }: any | undefined | null) => <h1>Hello</h1>;
const Table: React.FC<TableProps> = ({}) => {
    const [selectedRows, setSelectedRows] = useState(false);
    const [hideDirector, setHideDirector] = useState(false);
    const handleChange = (state: any) => {
        // You can use setState or dispatch with something like Redux so we can use the retrieved data
        console.log('Selected Rows: ', selectedRows);
    };
    const FilterComponent = ({ filterText, onFilter, onClear }: any) => (
        <>
            <TextField
                id="search"
                type="text"
                placeholder="Filter By Name"
                aria-label="Search Input"
                value={filterText}
                onChange={onFilter}
            />
            <ClearButton onClick={onClear}>X</ClearButton>
        </>
    );

    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    // const filteredItems = data.filter((item: any) => {
    //     item.title && item.title.toLowerCase().includes(filterText.toLowerCase());
    // });
    // console.log(data);

    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent
                onFilter={(e: any) => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
            />
        );
    }, [filterText, resetPaginationToggle]);
    //----------------------------------------------------------------

    return (
        <DataTable
            title="Arnold Movies"
            columns={columns}
            data={data}
            pagination
            paginationResetDefaultPage={resetPaginationToggle}
            highlightOnHover={true}
            // selectableRows
            theme="#283046"
            expandOnRowClicked={true}
            noHeader={true}
            subHeaderComponent={subHeaderComponentMemo}
            persistTableHead
            selectableRowsComponentProps={{ inkDisabled: true }}
            sortIcon={sortIcon}
            onSelectedRowsChange={handleChange}
            expandableRows={true}
            subHeader={true}
            expandableRowsComponent={<ExpandableComponent />}
        />
    );
};
export default Table;
