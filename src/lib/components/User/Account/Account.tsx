/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-sequences */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
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
import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { IoCameraOutline, IoArrowBack } from 'react-icons/io5';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// import { openDB } from 'idb';
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import ProfileSkeleton from '@/lib/components/User/Account/ProfileSkeleton';
import SocialMediaSkeleton from '@/lib/components/User/Account/SocialMediaSkeleton';
import {
  getUserData,
  updateUserData,
  openDB,
  removeUserData,
} from '@/services/UserStorage';

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

interface User {
  id: string;
  username: string;
  name: string;
  city: string;
  state: string;
  email: string;
  password: string;
  imageBase64?: string;
  whatsapp?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  facebook?: string;
}

const Account: React.FC = () => {
  const [openModal, setOpenModal] = React.useState<string | null>(null);
  const handleOpen = (modal: string) => setOpenModal(modal);
  const handleClose = () => (setImageBase64(null), setOpenModal(null));
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingButton, setIsLoadingButton] = useState(true);
  const [username, setUsername] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [imageBase64, setImageBase64] = useState<string | null>('');
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [linkedin, setLinkedin] = useState<string>('');
  const [twitter, setTwitter] = useState<string>('');
  const [facebook, setFacebook] = useState<string>('');

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

  const handleSaveUsername = () => handleUpdateUser({ username });
  const handleSaveName = () => handleUpdateUser({ name });
  const handleSavePassword = () => handleUpdateUser({ password });
  const handleSaveCity = () => handleUpdateUser({ city });
  const handleSaveState = () => handleUpdateUser({ state });
  const handleSaveAvatar = () =>
    handleUpdateUser({ imageBase64: imageBase64 || undefined });
  const handleSaveWhatsapp = () => handleUpdateUser({ whatsapp });
  const handleSaveInstagram = () => handleUpdateUser({ instagram });
  const handleSaveLinkedin = () => handleUpdateUser({ linkedin });
  const handleSaveTwitter = () => handleUpdateUser({ twitter });
  const handleSaveFacebook = () => handleUpdateUser({ facebook });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImageBase64(reader.result);
        }
      };
    }
  };

  // Função para deletar dados do usuário no IndexedDB
  // const deleteUserData = async (userId: number) => {
  //   try {
  //     const db = await openDB();
  //     const tx = db.transaction('user_data', 'readwrite');
  //     const store = tx.objectStore('user_data');
  //     const deleteRequest = store.delete(userId);  // Apagar o usuário pelo ID

  //     deleteRequest.onsuccess = () => {
  //       console.log(`Usuário com ID ${userId} deletado com sucesso!`);
  //     };

  //     deleteRequest.onerror = () => {
  //       console.error(`Erro ao deletar o usuário com ID ${userId}.`);
  //     };
  //   } catch (error) {
  //     console.error('Erro ao acessar o IndexedDB para deletar dados do usuário:', error);
  //   }
  // };

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
    <div className="grid gap-20">
      <div className="grid items-center gap-10 rounded-xl border-2 bg-white p-10 shadow-xl">
        <div>
          <h3 className="underline decoration-orange decoration-4 underline-offset-8">
            Informações Básicas
          </h3>
        </div>

        <div className="flex w-[240px] flex-col items-center justify-between gap-10 rounded-full lg:flex-row">
          <div className="rounded-full bg-black-100">
            <div className="bg-red-100 relative h-[300px]">
              <div className="group rounded-full">
                <button
                  onClick={() => handleOpen('avatar')}
                  className="rounded-full"
                >
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
          <Modal open={openModal === 'avatar'} onClose={handleClose}>
            <Box className="font-sans" sx={{ ...style, position: 'relative' }}>
              {/* Ícone de Fechar (X) */}
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-black absolute left-2 top-2 mb-5"
              >
                <IoArrowBack size={40} color="#cfd149" />
              </button>

              {/* Título */}
              <Typography className="mt-14" id="modal-modal-title" variant="h6">
                Editar sua foto de usuário
              </Typography>

              {/* Descrição */}
              <Typography
                className="w-full font-sans text-black-200"
                id="modal-modal-description"
                sx={{ mt: 2 }}
              >
                Uma imagem ajuda as pessoas a reconhecê-lo e permite que você
                saiba quando está conectado à sua conta.
              </Typography>

              {/* Campo de Texto */}
              <div className="flex w-full items-center justify-center gap-5">
                {imageBase64 ? (
                  <Avatar
                    className="mt-5 transition duration-300 group-hover:blur-sm"
                    alt="Remy Sharp"
                    sx={{
                      width: { lg: 300, xs: 150 },
                      height: { lg: 300, xs: 150 },
                    }}
                    src={imageBase64 || ''}
                  />
                ) : (
                  <Avatar
                    className="mt-5 transition duration-300 group-hover:blur-sm"
                    alt="Remy Sharp"
                    sx={{
                      width: { lg: 300, xs: 150 },
                      height: { lg: 300, xs: 150 },
                    }}
                    src={user?.imageBase64 || './assets/johnbonham.webp'}
                  />
                )}
                <div>
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="bg-gray-200 text-gray-700 hover:bg-gray-300 flex items-center gap-2 rounded-lg px-4 py-2">
                      <IoCameraOutline size={40} />
                      <span>Escolher</span>
                    </div>
                  </label>

                  {/* Input oculto */}
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
              </div>

              {imageBase64 ? (
                <div className="mt-5 flex w-full items-center gap-3">
                  <div className="flex w-full items-center justify-center">
                    <button
                      onClick={handleSaveAvatar}
                      className="rounded-lg bg-orange p-2 font-bold"
                    >
                      Enviar Imagem
                    </button>
                  </div>
                </div>
              ) : (
                <div> </div>
              )}
            </Box>
          </Modal>

          <div className="w-full">
            {/* Usuário */}
            <button
              onClick={() => handleOpen('username')}
              className="w-full hover:bg-black-100"
            >
              <div className="flex w-full items-center justify-between py-4">
                <div className="mr-[60px] font-bold opacity-50 md:mr-[230px]">
                  Usuário
                </div>
                <div className="flex w-full justify-start">
                  <span className="opacity-70">@</span>
                  {user?.username || ''}
                </div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </button>
            <Modal open={openModal === 'username'} onClose={handleClose}>
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
                  Editar seu nome de usuário
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
                  label="Novo nome de usuário"
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
                    onClick={handleSaveUsername}
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

            {/* Nome */}
            <button
              onClick={() => handleOpen('name')}
              className="w-full hover:bg-black-100"
            >
              <div className="flex w-full items-center justify-between py-4">
                <div className="mr-[75px] font-bold opacity-50 md:mr-[245px]">
                  Nome
                </div>
                <div className="flex w-full justify-start">
                  {user?.name || ''}
                </div>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                    onClick={handleSaveName}
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
                <div className="mr-[78px] font-bold opacity-50 md:mr-[248px]">
                  Email
                </div>
                <div className="flex w-full justify-start">
                  {/* Exibir email completo apenas em telas desktop */}
                  <span className="hidden lg:block">{user?.email || ''}</span>

                  {/* Exibir email truncado até "vitorsilva@" em telas menores que desktop */}
                  <span className="truncate lg:hidden">
                    {user?.email ? `${user?.email.slice(0, 11)}...` : ''}
                  </span>
                </div>

                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </button>
            <Modal open={openModal === 'email'} onClose={handleClose}>
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
                  Editar Email
                </Typography>

                {/* Descrição */}
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  As alterações no seu email serão refletidas na sua Conta do
                  Liga.
                </Typography>

                {/* Campo de Texto */}
                <CustomTextField
                  className="mt-5"
                  id="nome"
                  name="nome"
                  label="Novo Email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {/* Botões "Cancelar" e "Salvar" */}
                <div className="mt-5 flex w-full items-center justify-end gap-3">
                  <button
                    className="bg-gray-300 hover:bg-gray-400 rounded-lg p-2 font-bold"
                    onClick={handleClose}
                  >
                    Cancelar
                  </button>
                  <button className="rounded-lg bg-orange p-2 font-bold">
                    {isLoadingButton ? (
                      <CircularProgress size="30px" />
                    ) : (
                      'Salvar'
                    )}
                  </button>
                </div>
              </Box>
            </Modal>

            {/* Senha */}
            <button
              onClick={() => handleOpen('password')}
              className="w-full hover:bg-black-100"
            >
              <div className="flex w-full items-center justify-between py-4">
                <div className="mr-[75px] font-bold opacity-50 md:mr-[245px]">
                  Senha
                </div>
                <div className="flex w-full justify-start">****</div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </button>
            <Modal open={openModal === 'password'} onClose={handleClose}>
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
                  Editar Senha
                </Typography>

                {/* Descrição */}
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  As alterações na senha serão refletidas na sua Conta do Liga.
                </Typography>

                {/* Campo de Texto */}
                <CustomTextField
                  className="mt-5"
                  id="nome"
                  name="nome"
                  label="Novo Senha"
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                    onClick={handleSavePassword}
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

            {/* Cidade */}
            <button
              onClick={() => handleOpen('city')}
              className="w-full hover:bg-black-100"
            >
              <div className="flex w-full items-center justify-between py-4">
                <div className="mr-[70px] font-bold opacity-50 md:mr-[240px]">
                  Cidade
                </div>
                <div className="flex w-full justify-start">
                  {user?.city || '(adicione uma cidade)'}
                </div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </button>
            <Modal open={openModal === 'city'} onClose={handleClose}>
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
                  Editar Cidade
                </Typography>

                {/* Descrição */}
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  As alterações serão refletidas na sua Conta do Liga.
                </Typography>

                {/* Campo de Texto */}
                <CustomTextField
                  className="mt-5"
                  id="nome"
                  name="nome"
                  label="Nova Cidade"
                  variant="outlined"
                  fullWidth
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
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
                    onClick={handleSaveCity}
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

            {/* Estado */}

            <button
              onClick={() => handleOpen('state')}
              className="w-full hover:bg-black-100"
            >
              <div className="flex w-full items-center justify-between py-4">
                <div className="mr-[70px] font-bold opacity-50 md:mr-[240px]">
                  Estado
                </div>
                <div className="flex w-full justify-start">
                  {user?.state || '(adicione um estado)'}
                </div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </button>
            <Modal open={openModal === 'state'} onClose={handleClose}>
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
                  Editar Estado
                </Typography>

                {/* Descrição */}
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  As alterações serão refletidas na sua Conta do Liga.
                </Typography>

                {/* Campo de Texto */}
                <CustomTextField
                  className="mt-5"
                  id="nome"
                  name="nome"
                  label="Novo Estado"
                  variant="outlined"
                  fullWidth
                  value={state}
                  onChange={(e) => setState(e.target.value)}
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
                    onClick={handleSaveState}
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
            <button
              onClick={() => handleOpen('whatsapp')}
              className="w-full hover:bg-black-100"
            >
              <div className="flex w-full items-center justify-between py-4">
                <div className="mr-[35px] font-bold opacity-50 md:mr-[240px]">
                  Whatsapp
                </div>
                <div className="flex w-full justify-start">
                  {user?.whatsapp || '(adicione uma número)'}
                </div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </button>
            <Modal open={openModal === 'whatsapp'} onClose={handleClose}>
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
                  Editar whatsapp
                </Typography>

                {/* Descrição */}
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  As alterações serão refletidas na sua Conta do Liga.
                </Typography>

                {/* Campo de Texto */}
                <CustomTextField
                  className="mt-5"
                  id="nome"
                  name="nome"
                  label="Novo whatsapp"
                  variant="outlined"
                  fullWidth
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
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
                    onClick={handleSaveWhatsapp}
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

            {/* Instagram */}
            <button
              onClick={() => handleOpen('instagram')}
              className="w-full hover:bg-black-100"
            >
              <div className="flex w-full items-center justify-between py-4">
                <div className="mr-[35px] font-bold opacity-50 md:mr-[240px]">
                  Instagram
                </div>
                <div className="flex w-full justify-start">
                  {user?.instagram || '(adicione um instagram)'}
                </div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </button>
            <Modal open={openModal === 'instagram'} onClose={handleClose}>
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
                  Editar instagram
                </Typography>

                {/* Descrição */}
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  As alterações serão refletidas na sua Conta do Liga.
                </Typography>

                {/* Campo de Texto */}
                <CustomTextField
                  className="mt-5"
                  id="nome"
                  name="nome"
                  label="Novo instagram"
                  variant="outlined"
                  fullWidth
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
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
                    onClick={handleSaveInstagram}
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

            {/* Facebook */}
            <button
              onClick={() => handleOpen('facebook')}
              className="w-full hover:bg-black-100"
            >
              <div className="flex w-full items-center justify-between py-4">
                <div className="mr-[40px] font-bold opacity-50 md:mr-[245px]">
                  Facebook
                </div>
                <div className="flex w-full justify-start">
                  {user?.facebook || '(adicione um facebook)'}
                </div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </button>
            <Modal open={openModal === 'facebook'} onClose={handleClose}>
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
                  Editar facebook
                </Typography>

                {/* Descrição */}
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  As alterações serão refletidas na sua Conta do Liga.
                </Typography>

                {/* Campo de Texto */}
                <CustomTextField
                  className="mt-5"
                  id="nome"
                  name="nome"
                  label="Novo facebook"
                  variant="outlined"
                  fullWidth
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
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
                    onClick={handleSaveFacebook}
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

            {/* Twitter */}
            <button
              onClick={() => handleOpen('twitter')}
              className="w-full hover:bg-black-100"
            >
              <div className="flex w-full items-center justify-between py-4">
                <div className="mr-[60px] font-bold opacity-50 md:mr-[265px]">
                  Twitter
                </div>
                <div className="flex w-full justify-start">
                  {user?.twitter || '(adicione um twitter)'}
                </div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </button>
            <Modal open={openModal === 'twitter'} onClose={handleClose}>
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
                  Editar twitter
                </Typography>

                {/* Descrição */}
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  As alterações serão refletidas na sua Conta do Liga.
                </Typography>

                {/* Campo de Texto */}
                <CustomTextField
                  className="mt-5"
                  id="nome"
                  name="nome"
                  label="Novo twitter"
                  variant="outlined"
                  fullWidth
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
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
                    onClick={handleSaveTwitter}
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

            {/* Linkedin */}
            <button
              onClick={() => handleOpen('linkedin')}
              className="w-full hover:bg-black-100"
            >
              <div className="flex w-full items-center justify-between py-4">
                <div className="mr-[50px] font-bold opacity-50 md:mr-[255px]">
                  Linkedin
                </div>
                <div className="flex w-full justify-start">
                  {user?.linkedin || '(adicione um linkedin)'}
                </div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </button>
            <Modal open={openModal === 'linkedin'} onClose={handleClose}>
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
                  Editar linkedin
                </Typography>

                {/* Descrição */}
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  As alterações serão refletidas na sua Conta do Liga.
                </Typography>

                {/* Campo de Texto */}
                <CustomTextField
                  className="mt-5"
                  id="nome"
                  name="nome"
                  label="Novo linkedin"
                  variant="outlined"
                  fullWidth
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
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
                    onClick={handleSaveLinkedin}
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
      </div>
    </div>
  );
};

export default Account;
