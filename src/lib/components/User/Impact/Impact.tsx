/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/button-has-type */

'use client';

import ReplaySharpIcon from '@mui/icons-material/ReplaySharp';
import SearchIcon from '@mui/icons-material/Search';
import {
  Modal,
  Box,
  Typography,
  TextField,
  CircularProgress,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { toast } from 'react-toastify';

import Table from '@/lib/components/User/Impact/Table';
import {
  removeUserData,
  updateUserData,
  getUserData,
} from '@/services/UserStorage';

interface Impact {
  id: string;
  subject: string;
  locality: string;
  support: string;
  affectedCommunity: string[];
  biomes: string[];
  situation: string;
  contribution: string;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { md: 560, xs: 400 },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CustomTextField = styled(TextField)({
  '& input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 1000px white inset',
    WebkitTextFillColor: 'black',
  },
});

const ImpactComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [subject, setSubject] = useState('');
  const [locality, setLocality] = useState('');
  const [support, setSupport] = useState('');
  const [affectedCommunity, setAffectedCommunity] = useState<string[]>([]);
  const [biomes, setBiomes] = useState<string[]>([]);
  const [situation, setSituation] = useState('');
  const [contribution, setContribution] = useState('');

  const handleUserImpact = async (data: Partial<Impact>) => {
    setIsLoadingButton(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/update`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
          credentials: 'include',
        }
      );

      if (!response.ok) {
        throw new Error('Erro ao atualizar o usuário');
      }

      const updatedUser = await response.json();

      if (!updatedUser?.id) {
        throw new Error('Resposta inválida do servidor');
      }

      console.log('Dados atualizados recebidos:', updatedUser);

      // Remove os dados antigos do IndexedDB
      await removeUserData(updatedUser.id);

      // Atualiza os dados no IndexedDB
      await updateUserData(updatedUser.id, updatedUser);

      const freshUserData = await getUserData();
      console.log('Dados atualizados no IndexedDB:', freshUserData);

      setOpenModal(null);

      toast.success('Dados alterados com sucesso!', {
        position: 'top-right',
        autoClose: 2000,
      });
      window.location.reload();
    } catch (error) {
      toast.error('Erro ao salvar os dados!', {
        position: 'top-right',
        autoClose: 2000,
      });
      console.error('Erro ao salvar os dados do usuário:', error);
    } finally {
      setIsLoadingButton(false);
    }
  };

  const handleSaveImpact = () =>
    handleUserImpact({
      subject,
      locality,
      support,
      affectedCommunity,
      biomes,
      situation,
      contribution,
    });

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
