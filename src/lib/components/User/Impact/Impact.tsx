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
  width: { md: 560, xs: 260 },
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
  const handleClose = () => setOpenModal(null);
  const handleOpen = (modal: string) => setOpenModal(modal);

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
        <div className="flex grid w-full items-center px-3">
          <div className="flex w-full flex-col items-center justify-center space-y-2 md:flex-row md:justify-between">
            <div>
              <p className="text-center text-xl font-bold text-black-300 md:text-left">
                Seus impactos gerais
              </p>
              <p className="text-md w-full text-center font-light opacity-50 md:text-left">
                Os impactos serão listados aqui em ordem cronológica.
              </p>
            </div>
            <div className="mt-5 flex grid w-full grid-cols-1 items-center justify-center gap-2 md:w-[300px] md:grid-cols-2 md:justify-end">
              {/* <div className="inline-flex items-center justify-center rounded-full border-2 w-min">
                <ReplaySharpIcon sx={{ fontSize: 30 }} />
              </div> */}

              <button
                disabled
                className="flex items-center justify-center rounded-3xl border-2 px-5 py-2 opacity-50"
              >
                <p className="font-bold text-black-300">Excluir</p>
              </button>
              <button
                onClick={() => handleOpen('impact')}
                className="flex w-full items-center justify-center rounded-3xl border-2 bg-orange px-5 py-2"
              >
                <p className="font-bold text-black-300">Criar Impacto</p>
              </button>
              <Modal open={openModal === 'impact'} onClose={handleClose}>
                <Box sx={{ ...style, position: 'relative' }}>
                  {/* Ícone de Fechar (X) */}
                  <button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-black absolute left-2 top-2 mb-5"
                  >
                    <IoArrowBack size={40} color="#cfd149" />
                  </button>

                  {/* Título */}
                  <Typography
                    sx={{ marginTop: '30px' }}
                    id="modal-modal-title"
                    variant="h6"
                  >
                    Criar Impacto
                  </Typography>

                  {/* Descrição */}
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Crie um impacto e compartilhe com os membros que fazem parte
                    da Liga Colaborativa ds Povos.
                  </Typography>

                  {/* Botões "Cancelar" e "Salvar" */}
                  <div className="mt-5 flex w-full items-center justify-end gap-3">
                    <button
                      className="bg-gray-300 hover:bg-gray-400 rounded-lg p-2 font-bold"
                      onClick={handleClose}
                    >
                      Cancelar
                    </button>
                    <button className="rounded-lg border-2 bg-orange p-2 font-bold">
                      {isLoadingButton ? (
                        <CircularProgress size="30px" />
                      ) : (
                        'Salvar'
                      )}
                    </button>
                  </div>
                </Box>
              </Modal>
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
