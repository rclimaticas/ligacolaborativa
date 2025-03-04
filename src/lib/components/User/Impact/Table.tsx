/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-globals */
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import type {
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
} from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';

import { getImpactData } from '@/services/ImpactsStorage';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 0.5 },
  { field: 'subject', headerName: 'Subject', flex: 1.5 },
  { field: 'urgency', headerName: 'Urgency', flex: 1 },
  { field: 'locality', headerName: 'Locality', flex: 1 },
  { field: 'support', headerName: 'Support', flex: 1 },
  {
    field: 'affectedCommunity',
    headerName: 'Affected Community',
    flex: 2,
    valueGetter: (params: GridRenderCellParams) => {
      return Array.isArray(params.row?.affectedCommunity)
        ? params.row.affectedCommunity.join(', ')
        : 'N/A';
    },
  },
  {
    field: 'biomes',
    headerName: 'Biomes',
    flex: 1.5,
    valueGetter: (params: GridRenderCellParams) => {
      return Array.isArray(params.row?.biomes)
        ? params.row.biomes.join(', ')
        : 'N/A';
    },
  },
  { field: 'situation', headerName: 'Situation', flex: 1 },
  { field: 'contribution', headerName: 'Contribution', flex: 2 },
  {
    field: 'date',
    headerName: 'Date',
    flex: 1,
    type: 'date',
    valueGetter: (params: GridRenderCellParams) => {
      const dateValue = params.row?.date;
      if (!dateValue) {
        return null;
      }

      const date = new Date(dateValue);
      return isNaN(date.getTime()) ? null : date;
    },
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({ searchTerm }: { searchTerm: string }) {
  const [rows, setRows] = React.useState<any[]>([]);
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getImpactData('userImpact');
      if (data) {
        setRows(data);
      }
    };
    fetchData();
  }, []);

  const filteredRows = rows.filter(
    (row) =>
      row.subject?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.urgency?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.locality?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.situation?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = (params: GridRowParams) => {
    setSelectedRow(params.row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper sx={{ overflowX: 'auto', width: '100%' }} className="w-full">
      <div>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
          onRowClick={handleRowClick}
        />
      </div>

      {/* Modal do Material UI */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Impact Details</DialogTitle>
        <DialogContent>
          {selectedRow && (
            <>
              <p>
                <strong>Assunto:</strong> {selectedRow.subject}
              </p>
              <p>
                <strong>urgência:</strong> {selectedRow.urgency}
              </p>
              <p>
                <strong>Localidade:</strong> {selectedRow.locality}
              </p>
              <p>
                <strong>Suporte:</strong> {selectedRow.support}
              </p>
              <p>
                <strong>Comunidade afetada:</strong>{' '}
                {selectedRow.affectedCommunity?.join(', ') || 'N/A'}
              </p>
              <p>
                <strong>Biomas:</strong>{' '}
                {selectedRow.biomes?.join(', ') || 'N/A'}
              </p>
              <p>
                <strong>Situação:</strong> {selectedRow.situation}
              </p>
              <p>
                <strong>Contribuição:</strong> {selectedRow.contribution}
              </p>
              <p>
                <strong>Data:</strong>{' '}
                {new Date(selectedRow.date).toLocaleString()}
              </p>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <button
            onClick={handleClose}
            className="rounded-lg border-2 bg-orange p-2 font-bold"
          >
            Fechar
          </button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
