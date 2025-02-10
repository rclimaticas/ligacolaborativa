/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import AddAPhotoSharpIcon from '@mui/icons-material/AddAPhotoSharp';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Divider, Skeleton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import { openDB } from 'idb';
import React, { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { toast, ToastContainer } from 'react-toastify';

import { getUserData, updateUserData } from '@/services/UserStorage';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
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

interface User {
  id: string;
  username: string;
  imageBase64?: string;
}

const Account: React.FC = () => {
  const [openModal, setOpenModal] = React.useState<string | null>(null);
  const handleOpen = (modal: string) => setOpenModal(modal);
  const handleClose = () => setOpenModal(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingButton, setIsLoadingButton] = useState(true);
  const [username, setUsername] = useState<string>('');

  const handleSave = async () => {
    setIsLoadingButton(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/update`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username }),
          credentials: 'include',
        }
      );

      if (!response.ok) {
        throw new Error('Erro ao atualizar o usuário');
      }

      const updatedUser = await response.json();

      await updateUserData(updatedUser.id, updatedUser);

      setOpenModal(null);
      toast.success('Nome alterado com sucesso!', {
        position: 'top-right',
        autoClose: 2000,
      });
      window.location.reload();
    } catch (error) {
      toast.success('Erro ao salvar o usuário!', {
        position: 'top-right',
        autoClose: 2000,
      });
      console.error('Erro ao salvar o nome de usuário:', error);
    } finally {
      setIsLoadingButton(false);
    }
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
      try {
        const request = indexedDB.open('userDatabase', 1);

        request.onupgradeneeded = (event: any) => {
          const db = event.target.result;
          if (!db.objectStoreNames.contains('users')) {
            db.createObjectStore('users', { keyPath: 'id' });
          }
        };

        request.onsuccess = (event: any) => {
          const db = event.target.result;
          const tx = db.transaction('users', 'readonly');
          const store = tx.objectStore('users');
          const getRequest = store.get(1);

          getRequest.onsuccess = () => {
            if (getRequest.result) {
              setUser(getRequest.result);
            } else {
              console.warn('Nenhum usuário encontrado com ID 1.');
              setUser(null);
            }
          };

          getRequest.onerror = () => {
            console.error('Erro ao buscar dados do usuário.');
          };
        };

        request.onerror = () => {
          console.error('Erro ao abrir o banco de dados.');
        };
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const request = indexedDB.open('userDatabase', 1);

        request.onupgradeneeded = (event: any) => {
          const db = event.target.result;
          if (!db.objectStoreNames.contains('users')) {
            db.createObjectStore('users', { keyPath: 'id' });
          }
        };

        request.onsuccess = (event: any) => {
          const db = event.target.result;
          const tx = db.transaction('users', 'readonly');
          const store = tx.objectStore('users');
          const getRequest = store.get(1);

          getRequest.onsuccess = () => {
            if (getRequest.result) {
              setUser(getRequest.result);
            } else {
              console.warn('Nenhum usuário encontrado com ID 1.');
              setUser(null);
            }
          };

          getRequest.onerror = () => {
            console.error('Erro ao buscar dados do usuário.');
          };
        };

        request.onerror = () => {
          console.error('Erro ao abrir o banco de dados.');
        };
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="grid gap-20">
      <div className="grid items-center gap-10 rounded-xl border-2 bg-white p-10 shadow-xl">
        <div>
          <h3 className="underline decoration-orange decoration-4 underline-offset-8">
            Informações Básicas
          </h3>
        </div>
        {isLoading ? (
          <div className="flex items-center justify-between gap-10 rounded-full">
            {/* Skeleton para a imagem de perfil */}
            <div className="rounded-full bg-black-100">
              <div className="bg-red-100 relative h-[300px]">
                <div className="group rounded-full">
                  <button className="rounded-full">
                    <Skeleton
                      component="div"
                      variant="circular"
                      width={300}
                      height={300}
                      animation="wave"
                    >
                      <Avatar
                        alt="Remy Sharp"
                        sx={{ width: 300, height: 300 }}
                        src={user?.imageBase64 || './assets/johnbonham.webp'}
                      />
                    </Skeleton>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full">
              {/* Skeleton para o Usuário */}
              <button
                onClick={() => handleOpen('username')}
                className="w-full hover:bg-black-100"
              >
                <div className="flex w-full items-center justify-between py-4">
                  <div className="font-bold opacity-50">Usuário</div>
                  <Skeleton width="220px">
                    <div>@drummerjohn</div>
                  </Skeleton>
                  <div>
                    <DriveFileRenameOutlineIcon />
                  </div>
                </div>
                <Divider />
              </button>

              {/* Skeleton para o Nome */}
              <button
                onClick={() => handleOpen('name')}
                className="w-full hover:bg-black-100"
              >
                <div className="flex w-full items-center justify-between py-4">
                  <div className="font-bold opacity-50">Nome</div>
                  <Skeleton width="200px">
                    <div>username</div>
                  </Skeleton>
                  <div>
                    <DriveFileRenameOutlineIcon />
                  </div>
                </div>
                <Divider />
              </button>

              {/* Skeleton para o Email */}
              <button
                onClick={() => handleOpen('email')}
                className="w-full hover:bg-black-100"
              >
                <div className="flex w-full items-center justify-between py-4">
                  <div className="font-bold opacity-50">Email</div>
                  <Skeleton width="200px">
                    <div>ledzeppelin@drummer.com</div>
                  </Skeleton>
                  <div>
                    <DriveFileRenameOutlineIcon />
                  </div>
                </div>
                <Divider />
              </button>

              {/* Skeleton para a Senha */}
              <button
                onClick={() => handleOpen('password')}
                className="w-full hover:bg-black-100"
              >
                <div className="flex w-full items-center justify-between py-4">
                  <div className="font-bold opacity-50">Senha</div>
                  <Skeleton width="200px">
                    <div>****</div>
                  </Skeleton>
                  <div>
                    <DriveFileRenameOutlineIcon />
                  </div>
                </div>
                <Divider />
              </button>

              {/* Skeleton para a Cidade */}
              <button
                onClick={() => handleOpen('city')}
                className="w-full hover:bg-black-100"
              >
                <div className="flex w-full items-center justify-between py-4">
                  <div className="font-bold opacity-50">Cidade</div>
                  <Skeleton width="200px">
                    <div>Londres</div>
                  </Skeleton>
                  <div>
                    <DriveFileRenameOutlineIcon />
                  </div>
                </div>
                <Divider />
              </button>

              {/* Skeleton para o Estado */}
              <div className="hover:bg-black-100">
                <div className="flex w-full items-center justify-between py-4">
                  <div className="font-bold opacity-50">Estado</div>
                  <Skeleton width="200px">
                    <div>#######</div>
                  </Skeleton>
                  <div>
                    <DriveFileRenameOutlineIcon />
                  </div>
                </div>
                <Divider />
              </div>
              <div className="custom-toast-container">
                <ToastContainer />
                <style jsx>
                  {`
                    .custom-toast-container {
                      position: fixed !important;
                      top: 0;
                      right: 0;
                      z-index: 9999;
                      pointer-events: none; /* Para evitar que interaja com outros elementos */
                    }
                  `}
                </style>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-10 rounded-full">
            <div className="rounded-full bg-black-100">
              <div className="bg-red-100 relative h-[300px]">
                <div className="group rounded-full">
                  <button className="rounded-full">
                    <Avatar
                      className="transition duration-300 group-hover:blur-sm"
                      alt="Remy Sharp"
                      sx={{ width: 300, height: 300 }}
                      src={user?.imageBase64 || './assets/johnbonham.webp'}
                    />
                    <div className="absolute inset-0 z-10 flex items-center justify-center rounded-full text-6xl font-semibold text-white opacity-0 duration-300 group-hover:opacity-100">
                      <AddAPhotoSharpIcon
                        sx={{ fontSize: 90, color: '#000100' }}
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full">
              {/* Usuário */}
              <button
                onClick={() => handleOpen('username')}
                className="w-full hover:bg-black-100"
              >
                <div className="flex w-full items-center justify-between py-4">
                  <div className="font-bold opacity-50">Usuário</div>
                  <div className="w-[220px]">@drummerjohn</div>
                  <div>
                    <DriveFileRenameOutlineIcon />
                  </div>
                </div>
                <Divider />
              </button>
              <Modal open={openModal === 'username'} onClose={handleClose}>
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6">
                    Editar Usuário
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Aqui você pode alterar o nome de usuário.
                  </Typography>
                </Box>
              </Modal>

              {/* Nome */}
              <button
                onClick={() => handleOpen('name')}
                className="w-full hover:bg-black-100"
              >
                <div className="flex w-full items-center justify-between py-4">
                  <div className="font-bold opacity-50">Nome</div>
                  <div className="w-[200px]">{user?.username || ''}</div>
                  <div>
                    <DriveFileRenameOutlineIcon />
                  </div>
                </div>
                <Divider />
              </button>
              <Modal open={openModal === 'name'} onClose={handleClose}>
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
                    className="mt-14"
                    id="modal-modal-title"
                    variant="h6"
                  >
                    Editar Nome
                  </Typography>

                  {/* Descrição */}
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    As alterações no seu nome serão refletidas na sua Conta do
                    Liga.
                  </Typography>

                  {/* Campo de Texto */}
                  <CustomTextField
                    className="mt-5"
                    id="nome"
                    name="nome"
                    label="Novo Nome"
                    variant="outlined"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                      onClick={handleSave}
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

              {/* Email */}
              <button
                onClick={() => handleOpen('email')}
                className="w-full hover:bg-black-100"
              >
                <div className="flex w-full items-center justify-between py-4">
                  <div className="font-bold opacity-50">Email</div>
                  <div className="w-[200px]">ledzeppelin@drummer.com</div>
                  <div>
                    <DriveFileRenameOutlineIcon />
                  </div>
                </div>
                <Divider />
              </button>
              <Modal open={openModal === 'email'} onClose={handleClose}>
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6">
                    Editar email
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Aqui você pode alterar seu nome completo.
                  </Typography>
                </Box>
              </Modal>

              {/* Senha */}
              <button
                onClick={() => handleOpen('password')}
                className="w-full hover:bg-black-100"
              >
                <div className="flex w-full items-center justify-between py-4">
                  <div className="font-bold opacity-50">Senha</div>
                  <div className="w-[200px]">****</div>
                  <div>
                    <DriveFileRenameOutlineIcon />
                  </div>
                </div>
                <Divider />
              </button>
              <Modal open={openModal === 'password'} onClose={handleClose}>
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6">
                    Editar password
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Aqui você pode alterar seu nome completo.
                  </Typography>
                </Box>
              </Modal>

              {/* Cidade */}
              <button
                onClick={() => handleOpen('city')}
                className="w-full hover:bg-black-100"
              >
                <div className="flex w-full items-center justify-between py-4">
                  <div className="font-bold opacity-50">Cidade</div>
                  <div className="w-[200px]">Londres</div>
                  <div>
                    <DriveFileRenameOutlineIcon />
                  </div>
                </div>
                <Divider />
              </button>
              <Modal open={openModal === 'city'} onClose={handleClose}>
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6">
                    Editar city
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Aqui você pode alterar seu nome completo.
                  </Typography>
                </Box>
              </Modal>

              {/* Estado */}
              <div className="hover:bg-black-100">
                <div className="flex w-full items-center justify-between py-4">
                  <div className="font-bold opacity-50">Estado</div>
                  <div className="w-[200px]">#######</div>
                  <div>
                    <DriveFileRenameOutlineIcon />
                  </div>
                </div>
                <Divider />
              </div>
              <div className="custom-toast-container">
                <ToastContainer />
                <style jsx>
                  {`
                    .custom-toast-container {
                      position: fixed !important;
                      top: 0;
                      right: 0;
                      z-index: 9999;
                      pointer-events: none; /* Para evitar que interaja com outros elementos */
                    }
                  `}
                </style>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Redes Sociais */}
      <div className="grid items-center gap-10 rounded-xl border-2 bg-white p-10 shadow-xl">
        <div>
          <h3 className="underline decoration-orange decoration-4 underline-offset-8">
            Redes Sociais
          </h3>
        </div>
        <div className="flex items-center justify-between gap-10 rounded-full">
          <div className="w-full">
            {/* Whatsapp */}
            <div className="hover:bg-black-100">
              <div className="flex w-full items-center justify-between py-4">
                <div className="font-bold opacity-50">Whatsapp</div>
                <div className="w-[230px]">(99)99999999</div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </div>

            {/* Instagram */}
            <div className="hover:bg-black-100">
              <div className="flex w-full items-center justify-between py-4">
                <div className="font-bold opacity-50">Instagram</div>
                <div className="w-[230px]">bonham_drummer</div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </div>

            {/* Linkedin */}
            <div className="hover:bg-black-100">
              <div className="flex w-full items-center justify-between py-4">
                <div className="font-bold opacity-50">Linkedin</div>
                <div className="w-[215px]">bonham</div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </div>

            {/* Facebook */}
            <div className="hover:bg-black-100">
              <div className="flex w-full items-center justify-between py-4">
                <div className="font-bold opacity-50">Facebook</div>
                <div className="w-[220px]">johndrummer</div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </div>

            {/* Twitter */}
            <div className="hover:bg-black-100">
              <div className="flex w-full items-center justify-between py-4">
                <div className="font-bold opacity-50">Twitter</div>
                <div className="w-[200px]">bonhamdrummer</div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
