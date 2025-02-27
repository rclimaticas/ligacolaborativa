/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/button-has-type */

'use client';

import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Box, Typography, Divider, Radio } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { toast, ToastContainer } from 'react-toastify';

import {
  getUserData,
  updateUserData,
  openDB,
  removeUserData,
} from '@/services/UserStorage';

const customCheckboxStyles = {
  '&.Mui-checked': {
    color: '#cfd149',
  },
};

const CustomTextField = styled(TextField)({
  '& input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 1000px white inset',
    WebkitTextFillColor: 'black',
  },
});
interface User {
  id: string;
  organization?: string;
  areaOfInterest?: string[];
  weeklyAvailability: number;
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
const Colaborate: React.FC = () => {
  const [openModal, setOpenModal] = React.useState<string | null>(null);
  const handleOpen = (modal: string) => setOpenModal(modal);
  const handleClose = () => setOpenModal(null);
  const [organization, setOrganization] = useState<string>('');
  const [areaOfInterest, setAreaOfInterest] = useState<string[]>([]);
  const [weeklyAvailability, setWeeklyAvailability] = useState<number>(0);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingButton, setIsLoadingButton] = useState(true);
  const [selectedTime, setSelectedTime] = useState<number | null>(null);

  const handleUpdateUser = async (data: Partial<User>) => {
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

      await removeUserData(updatedUser.id);

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

  const handleAreaOfInterestChange = (area: string) => {
    setAreaOfInterest((prevState) =>
      prevState.includes(area)
        ? prevState.filter((item) => item !== area)
        : [...prevState, area]
    );
  };

  const handleSaveOrganization = () => handleUpdateUser({ organization });
  const handleSaveWeeklyAvailability = () => {
    if (selectedTime !== null) {
      handleUpdateUser({ weeklyAvailability: selectedTime });
    } else {
      toast.error('Por favor, selecione um tempo de disponibilidade.', {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };
  const handleSaveAreaOfInterest = () => {
    const tags = areaOfInterest.map((tag) => tag.trim());
    handleUpdateUser({ areaOfInterest: tags });
  };

  useEffect(() => {
    const initializeUser = async () => {
      try {
        const storedUser: User | null = await getUserData();
        if (storedUser) {
          console.log('Dados do usuário carregados:', storedUser);
          setUser(storedUser);
        }
      } catch (error) {
        console.error('Erro ao carregar os dados do usuário:', error);
      } finally {
        setIsLoading(false);
        setIsLoadingButton(false);
      }
    };
    initializeUser();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user?.id) {
        console.error('ID do usuário não encontrado.');
        return;
      }

      try {
        const db = await openDB();
        const tx = db.transaction('user_data', 'readonly');
        const store = tx.objectStore('user_data');
        const getRequest = store.get(user.id);

        getRequest.onsuccess = () => {
          if (getRequest.result) {
            if (JSON.stringify(getRequest.result) !== JSON.stringify(user)) {
              setUser(getRequest.result);
            }
          } else {
            console.warn('Nenhum usuário encontrado com o ID:', user.id);
          }
        };

        getRequest.onerror = () => {
          console.error('Erro ao buscar dados do usuário no IndexedDB.');
        };
      } catch (error) {
        console.error(
          'Erro ao acessar o IndexedDB para carregar dados do usuário:',
          error
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (user?.id) {
      fetchUserData();
    }
  }, [user?.id]);
  return (
    <>
      <h3>
        Esse espaço irá ajudar a direcionar da melhor forma as possibilidade de
        colaborar e receber colaboração. Atualize as informações sempre que
        necessário.
      </h3>

      <div className="grid items-center rounded-xl border-2 bg-white p-10 font-sans shadow-xl">
        <div className="w-[280px]">
          {/* Organização */}
          <button
            onClick={() => handleOpen('organization')}
            className="w-full hover:bg-black-100"
          >
            <div className="flex w-full items-center justify-between py-4">
              <div className="mr-0 font-bold opacity-50 md:mr-[245px]">
                Organização
              </div>
              <div className="flex w-full justify-start">
                {user?.organization || '(adicione uma organização)'}
              </div>
              <div>
                <DriveFileRenameOutlineIcon />
              </div>
            </div>
            <Divider />
          </button>
          <Modal open={openModal === 'organization'} onClose={handleClose}>
            <Box sx={{ ...style, position: 'relative' }}>
              {/* Ícone de Fechar (X) */}
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-black absolute left-2 top-2 mb-5"
              >
                <IoArrowBack size={40} color="#cfd149" />
              </button>

              {/* Título */}
              <Typography className="mt-14" id="modal-modal-title" variant="h6">
                Editar Nome
              </Typography>

              {/* Descrição */}
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                As alterações no seu nome serão refletidas na sua Conta do Liga.
              </Typography>

              {/* Campo de Texto */}
              <CustomTextField
                className="mt-5"
                id="nome"
                name="nome"
                label="Novo Nome"
                variant="outlined"
                fullWidth
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
              />

              {/* Botões "Cancelar" e "Salvar" */}
              <div className="mt-5 flex w-full items-center justify-end gap-3">
                <button
                  className="bg-gray-300 hover:bg-gray-400 rounded-lg p-2 font-bold"
                  onClick={handleClose}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveOrganization}
                  className="rounded-lg bg-orange p-2 font-bold"
                >
                  {isLoadingButton ? (
                    <CircularProgress size="30px" />
                  ) : (
                    'Salvar'
                  )}
                </button>
              </div>
            </Box>
          </Modal>
          {/* <div className="hover:bg-black-100">
          <div className="flex w-full items-center justify-between py-4">
            <div className="font-bold opacity-50">Disponibilidade</div>
            <div className="w-[260px]">10 minutos</div>
            <div>
              <DriveFileRenameOutlineIcon />
            </div>
          </div>
          <Divider />
        </div> */}

          {/* Áreas de Interesse */}
          <button
            onClick={() => handleOpen('areaOfInterest')}
            className="w-full hover:bg-black-100"
          >
            <div className="flex w-full items-center justify-between py-4">
              <div className="mr-[50px] font-bold opacity-50 md:mr-[245px]">
                Áreas de Interesse
              </div>
              <div className="flex w-full flex-wrap justify-start gap-1">
                {Array.isArray(user?.areaOfInterest) &&
                user?.areaOfInterest.length > 0 ? (
                  <div className="flex flex-wrap gap-1">
                    {user?.areaOfInterest.map((tags, index) => (
                      <div
                        key={index}
                        className="w-auto rounded-lg border-2 bg-[#FFF0BC] p-1"
                      >
                        <p className="px-2 text-center text-sm font-bold text-black-300">
                          {tags}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm font-bold">
                    Adicione áreas de interesse
                  </p>
                )}
              </div>

              <div>
                <DriveFileRenameOutlineIcon />
              </div>
            </div>
            <Divider />
          </button>
          <Modal open={openModal === 'areaOfInterest'} onClose={handleClose}>
            <Box sx={{ ...style, position: 'relative' }}>
              {/* Ícone de Fechar (X) */}
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-black absolute left-2 top-2 mb-5"
              >
                <IoArrowBack size={40} color="#cfd149" />
              </button>

              {/* Título */}
              <Typography className="mt-14" id="modal-modal-title" variant="h6">
                Editar Áreas de Interesse
              </Typography>

              {/* Descrição */}
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Selecione as áreas de interesse.
              </Typography>

              {/* Lista de áreas de interesse */}
              <div className="mt-5 space-y-4">
                {[
                  'Social',
                  'Cultural',
                  'Econômia',
                  'Ambiental',
                  'Tecnologia',
                  'Inovação',
                  'Desenvolvimento',
                ].map((area, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Checkbox
                      id={`area-${index}`}
                      checked={areaOfInterest.includes(area)}
                      onChange={() => handleAreaOfInterestChange(area)}
                      sx={customCheckboxStyles}
                    />
                    <label
                      htmlFor={`area-${index}`}
                      className="text-gray-700 text-sm font-semibold"
                    >
                      {area}
                    </label>
                  </div>
                ))}
              </div>

              {/* Botões "Cancelar" e "Salvar" */}
              <div className="mt-5 flex w-full items-center justify-end gap-3">
                <button
                  className="bg-gray-300 hover:bg-gray-400 rounded-lg p-2 font-bold"
                  onClick={handleClose}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveAreaOfInterest}
                  className="rounded-lg bg-orange p-2 font-bold"
                >
                  {isLoadingButton ? (
                    <CircularProgress size="30px" />
                  ) : (
                    'Salvar'
                  )}
                </button>
              </div>
            </Box>
          </Modal>

          {/* Disponibilidade */}
          <button
            onClick={() => handleOpen('weeklyAvailability')}
            className="w-full hover:bg-black-100"
          >
            <div className="flex w-full items-center justify-between py-4">
              <div className="mr-0 font-bold opacity-50 md:mr-[245px]">
                Disponibilidade
              </div>
              <div className="flex w-full justify-start">
                {user?.weeklyAvailability || '(adicione uma disponibilidade)'}
              </div>
              <div>
                <DriveFileRenameOutlineIcon />
              </div>
            </div>
            <Divider />
          </button>
          <Modal
            open={openModal === 'weeklyAvailability'}
            onClose={handleClose}
          >
            <Box sx={{ ...style, position: 'relative' }}>
              {/* Ícone de Fechar (X) */}
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-black absolute left-2 top-2 mb-5"
              >
                <IoArrowBack size={40} color="#cfd149" />
              </button>

              {/* Título */}
              <Typography className="mt-14" id="modal-modal-title" variant="h6">
                Selecione a Disponibilidade
              </Typography>

              {/* Descrição */}
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Selecione a duração da disponibilidade.
              </Typography>

              {/* Seção para selecionar a disponibilidade */}
              <div className="mt-5 space-y-4">
                {[10, 30, 60].map((time, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Radio
                      id={`time-${index}`}
                      checked={selectedTime === time}
                      onChange={() => setSelectedTime(time)}
                      sx={customCheckboxStyles}
                    />
                    <label
                      htmlFor={`time-${index}`}
                      className="text-gray-700 text-sm font-semibold"
                    >
                      {time} minutos
                    </label>
                  </div>
                ))}
              </div>

              {/* Botões "Cancelar" e "Salvar" */}
              <div className="mt-5 flex w-full items-center justify-end gap-3">
                <button
                  className="bg-gray-300 hover:bg-gray-400 rounded-lg p-2 font-bold"
                  onClick={handleClose}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveWeeklyAvailability}
                  className="rounded-lg bg-orange p-2 font-bold"
                >
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
    </>
  );
};

export default Colaborate;
