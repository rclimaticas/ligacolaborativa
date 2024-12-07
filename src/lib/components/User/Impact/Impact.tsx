/* eslint-disable react/button-has-type */
import ReplaySharpIcon from '@mui/icons-material/ReplaySharp';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import type * as React from 'react';

import BreadCrumbs from '@/lib/components/User/Impact/Breadcrumbs';
import Table from '@/lib/components/User/Impact/Table';

const ImpactComponent: React.FC = () => {
  return (
    <div className="flex flex-col space-y-5">
      <div>
        <BreadCrumbs />
      </div>
      <div className="grid rounded-2xl border-2 bg-white p-2 shadow-xl">
        <div className="flex grid w-full grid-cols-2 items-center justify-between px-3">
          <div>
            <p className="text-xl font-bold text-black-300">
              Seus impactos gerais
            </p>
            <p className="text-md font-light opacity-50">
              Os impactos serão listados aqui em ordem cronológica.
            </p>
          </div>
          <div className="flex w-full items-center justify-end space-x-4">
            <div className="bg- rounded-full border-2">
              <ReplaySharpIcon sx={{ fontSize: 30 }} />
            </div>
            <button
              disabled
              className="flex w-auto items-center justify-center rounded-3xl border-2 px-5 py-2 opacity-50"
            >
              <p className="font-bold text-black-300">Excluir</p>
            </button>
            <button className="flex w-auto items-center justify-center rounded-3xl border-2 bg-orange px-5 py-2">
              <p className="font-bold text-black-300">Criar Impacto</p>
            </button>
          </div>
          <Paper
            component="form"
            className="mt-2 h-2/3 w-1/2 rounded-2xl border-2"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 400,
            }}
          >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Encontrar impactos"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
          </Paper>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default ImpactComponent;
