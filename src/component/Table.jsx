import * as React from 'react';
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
// ORIGINAL 

function Table({ data }) {

const [cellInfo, setCellInfo] = React.useState(null);

 const handleCellClick = (params, event) => {
   setCellInfo(params);
 };


  
  console.log(data);
  const columns = [
    { field: 'CCLtStatus', headerName: 'CCLt Status', sortable: true, filter: true, width: 150, headerClassName: 'lightblue-header', cellClassName: 'border-right', fixed: 'left' },
    { field: 'counterpartName', headerName: 'Counterpart Name', sortable: true, filter: true, width: 150, headerClassName: 'lightblue-header', cellClassName: 'border-right', fixed: 'left' },
    { field: 'SDSId', headerName: 'SDS Id', sortable: true, filter: true, width: 150, headerClassName: 'lightblue-header', cellClassName: 'border-right', fixed: 'left' },
    { field: 'marketTier', headerName: 'Market Tier', sortable: true, filter: true, width: 150, headerClassName: 'lightblue-header', cellClassName: 'border-right' },
    { field: 'LEI', headerName: 'LEI', sortable: true, filter: true, width: 150, headerClassName: 'lightblue-header', cellClassName: 'border-right' },
    { field: 'reporting', headerName: 'Reporting', sortable: true, filter: true, width: 150, headerClassName: 'lightblue-header', cellClassName: 'border-right' },
    {
      field: 'typeIndicator',
      headerName: 'Type Indicator',
      sortable: false,
      filter: false,
      width: 150,
      headerClassName: 'lightblue-header',
      cellClassName: 'border-right',
      renderCell: (params) => {
        if (params.row.tableType === 'type1') {
          return <span style={{ color: 'red' }}>R</span>;
        } else if (params.row.tableType === 'type2') {
          return <span style={{ color: 'green' }}>G</span>;
        } else {
          return <span style={{ color: 'blue' }}>Unknown</span>;
        }
      },
    },
    { field: 'stage', headerName: 'Stage', sortable: true, filter: true, width: 150, headerClassName: 'lightblue-header', cellClassName: 'border-right' },
    { field: 'margin', headerName: 'Margin', sortable: true, filter: true, width: 150, headerClassName: 'lightblue-header', cellClassName: 'border-right' },
    { field: 'ball-in', headerName: 'Ball-In', sortable: true, filter: true, width: 150, headerClassName: 'lightblue-header', cellClassName: 'border-right' },
    { field: 'riskmitigation', headerName: 'Risk Mitigation', sortable: true, filter: true, width: 150, headerClassName: 'lightblue-header', cellClassName: 'border-right' },
    { field: 'cftc_p1_p2', headerName: 'CFTC P1&P2', sortable: true, filter: true, width: 150, headerClassName: 'lightblue-header', cellClassName: 'border-right' },
    { field: 'global_kyc', headerName: 'Global KYC', sortable: true, filter: true, width: 150, headerClassName: 'lightblue-header', cellClassName: 'border-right' },
    { field: 'global_retail_client', headerName: 'Global Retail Client', sortable: true, filter: true, width: 150, headerClassName: 'lightblue-header', cellClassName: 'border-right' },
  ];

  return (
    <div style={{ height: '100vh', width: '100%',display:'flex' }}>
      <DataGridPro
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        autoHeight
        autoPageSize
        slots={{ toolbar: GridToolbar }}
         onCellClick={handleCellClick}
      />

      <Autocomplete
      id="combo-box-demo"
      options={Array.from(new Set(data.map((row) => row[cellInfo?.field]))).sort()}
      getOptionLabel={(option) => option}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={cellInfo ? cellInfo.field : ''} variant="outlined" />}
      />
    </div>
  );
}

export default Table;
