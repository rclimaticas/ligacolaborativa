/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import AddAPhotoSharpIcon from '@mui/icons-material/AddAPhotoSharp';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { IoArrowBack } from 'react-icons/io5';

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

const Account: React.FC = () => {
  const [openModal, setOpenModal] = React.useState<string | null>(null);
  const handleOpen = (modal: string) => setOpenModal(modal);
  const handleClose = () => setOpenModal(null);
  return (
    <div className="grid gap-20">
      <div className="grid items-center gap-10 rounded-xl border-2 bg-white p-10 shadow-xl">
        <div>
          <h3 className="underline decoration-orange decoration-4 underline-offset-8">
            Informações Básicas
          </h3>
        </div>
        <div className="flex items-center justify-between gap-10 rounded-full">
          <div className="rounded-full bg-black-100">
            <div className="bg-red-100 relative h-[300px]">
              <div className="group rounded-full">
                <button className="rounded-full">
                  <Avatar
                    className="transition duration-300 group-hover:blur-sm"
                    alt="Remy Sharp"
                    sx={{ width: 300, height: 300 }}
                    src="./assets/johnbonham.webp"
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
                <div className="w-[200px]">John Bonham</div>
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
                  label="Nome"
                  variant="outlined"
                  fullWidth
                  value="sdkfmkd"
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
                    Salvar
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
