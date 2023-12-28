import * as React from 'react';
import { DataGrid,GridToolbar  } from '@mui/x-data-grid';

function Table({ data }) {
    const columns = [
        { field: 'CCLtStatus', headerName: 'CCLt Status', sortable: true, filter: true, width: 150, 
          headerClassName: 'lightblue-header', cellClassName: 'border-right' },
        { field: 'counterpartName', headerName: 'Counterpart Name', sortable: true, filter: true, width: 150, 
          headerClassName: 'lightblue-header', cellClassName: 'border-right' },
        { field: 'SDSId', headerName: 'SDS Id', sortable: true, filter: true, width: 150, 
          headerClassName: 'lightblue-header', cellClassName: 'border-right' },
        { field: 'marketTier', headerName: 'Market Tier', sortable: true, filter: true, width: 150, 
          headerClassName: 'lightblue-header', cellClassName: 'border-right' },
        { field: 'LEI', headerName: 'LEI', sortable: true, filter: true, width: 150, 
          headerClassName: 'lightblue-header', cellClassName: 'border-right' },
        { field: 'reporting', headerName: 'Reporting', sortable: true, filter: true, width: 150, 
          headerClassName: 'lightblue-header', cellClassName: 'border-right' },
      ];

  return (
    <div style={{ height: 400, width: '75%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        slots={{ toolbar: GridToolbar }}
      />
    </div>
  );
}

export default Table;