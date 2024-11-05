/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        type="button"
        className="w-28 rounded-lg rounded-xl border-2 border-black-300 bg-orange p-2 text-xl font-semibold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]"
        onClick={handleOpen}
      >
        Enviar
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="text-black-300">
          <div className="text-xl font-bold">Confirmação</div>
          <div>Tem certeza de que deseja enviar suas informações?</div>
          <div className="flex w-full justify-end gap-2">
            <button
              className="w-28 rounded-lg rounded-xl bg-white p-2 text-xl font-semibold text-black-300"
              onClick={handleClose}
            >
              Cancelar
            </button>
            <button className="w-28 rounded-lg rounded-xl border-2 border-black-300 bg-orange p-2 text-xl font-semibold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]">
              Confirmar
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
