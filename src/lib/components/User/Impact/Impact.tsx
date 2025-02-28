/* eslint-disable react/button-has-type */
import ReplaySharpIcon from '@mui/icons-material/ReplaySharp';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

import Table from '@/lib/components/User/Impact/Table';

const ImpactComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex flex-col space-y-5">
      <div className="grid rounded-2xl border-2 bg-white p-2 shadow-xl">
        <div className="flex grid w-full grid-cols-1 items-center justify-between px-3">
          <div className="flex flex-col space-y-2 md:flex-row">
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
          </div>
          <Paper
            component="form"
            className="mt-2 rounded-2xl border-2"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: { md: 300, xs: '100%' },
            }}
          >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Encontrar impactos"
              inputProps={{ 'aria-label': 'search impacts' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Paper>
        </div>
        <Table searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default ImpactComponent;
