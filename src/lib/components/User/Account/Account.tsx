/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import AddAPhotoSharpIcon from '@mui/icons-material/AddAPhotoSharp';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';

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

const Account: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            <button onClick={handleOpen} className="w-full hover:bg-black-100">
              <div className="flex w-full items-center justify-between py-4">
                <div className="font-bold opacity-50">Usuário</div>
                <div className="w-[220px]">@drummerjohn</div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Modal>

            {/* Nome */}
            <div className="hover:bg-black-100">
              <div className="flex w-full items-center justify-between py-4">
                <div className="font-bold opacity-50">Nome</div>
                <div className="w-[200px]">John Bonham</div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </div>

            {/* Email */}
            <div className="hover:bg-black-100">
              <div className="flex w-full items-center justify-between py-4">
                <div className="font-bold opacity-50">Email</div>
                <div className="w-[200px]">ledzeppelin@drummer.com</div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </div>

            {/* Senha */}
            <div className="hover:bg-black-100">
              <div className="flex w-full items-center justify-between py-4">
                <div className="font-bold opacity-50">Senha</div>
                <div className="w-[200px]">****</div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </div>

            {/* Cidade */}
            <div className="hover:bg-black-100">
              <div className="flex w-full items-center justify-between py-4">
                <div className="font-bold opacity-50">Cidade</div>
                <div className="w-[200px]">Londres</div>
                <div>
                  <DriveFileRenameOutlineIcon />
                </div>
              </div>
              <Divider />
            </div>

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
