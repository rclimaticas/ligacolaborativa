/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  maxHeight: '80vh', // Define a altura máxima do modal
  overflowY: 'auto',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirmOpen = () => {
    setOpen(false);
    setConfirmOpen(true);
  };

  const handleConfirmClose = () => setConfirmOpen(false);

  const handleFinalSubmit = () => {
    setConfirmOpen(false);
    alert('Dados enviados com sucesso!');
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex grid flex-col gap-2 text-black-300">
        <div className="text-center text-3xl font-bold">
          Contribua enviando sabedoria
        </div>
        <p>
          Faça o envio dos artigos que você desejar para colaborar com a Liga
          Colaborativa.
        </p>
        <div className="flex w-full justify-center">
          <button
            type="button"
            className="z-20 w-72 rounded-lg rounded-xl border-2 border-black-300 bg-orange p-2 text-xl font-semibold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]"
            onClick={handleOpen}
          >
            Fazer envio de arquivos
          </button>
        </div>
      </div>

      {/* Modal principal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="text-black-300">
          <div className="mb-5 text-xl font-bold">Envio de Artigo</div>
          <div className="grid gap-5">
            <TextField
              required
              id="name"
              label="Nome"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              id="publication-type"
              label="Tipo de publicação"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              id="subject"
              label="Assunto"
              variant="outlined"
              fullWidth
            />
            <TextField
              multiline
              rows={4}
              required
              id="description"
              label="Breve descrição sobre o artigo"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="mb-10 mt-10 grid gap-5">
            <div className="text-xl font-normal">Informações adicionais</div>
            <TextField
              required
              id="link_publication"
              label="Link da Publicação"
              variant="outlined"
              fullWidth
            />
            <Button
              component="label"
              variant="contained"
              startIcon={<FaCloudUploadAlt />}
            >
              Upload de arquivos
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => console.warn(event.target.files)}
                multiple
              />
            </Button>
          </div>

          <div className="flex w-full justify-end gap-2">
            <button
              className="w-28 rounded-lg bg-white p-2 text-xl font-semibold text-black-300"
              onClick={handleClose}
            >
              Cancelar
            </button>
            <button
              className="w-28 rounded-lg border-2 border-black-300 bg-orange p-2 text-xl font-semibold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]"
              onClick={handleConfirmOpen}
            >
              Confirmar
            </button>
          </div>
        </Box>
      </Modal>

      {/* Segundo modal de confirmação */}
      <Modal
        open={confirmOpen}
        onClose={handleConfirmClose}
        aria-labelledby="confirm-modal-title"
        aria-describedby="confirm-modal-description"
      >
        <Box sx={style} className="text-center text-black-300">
          <div className="mb-5 text-xl font-bold">Confirmação Final</div>
          <p>
            Confirme que todas as informações estão corretas antes de enviar.
          </p>
          <div className="mt-5 flex w-full justify-center gap-2">
            <button
              className="w-28 rounded-lg bg-white p-2 text-xl font-semibold text-black-300"
              onClick={() => {
                setConfirmOpen(false);
                setOpen(true);
              }}
            >
              Voltar
            </button>
            <button
              className="w-28 rounded-lg border-2 border-black-300 bg-orange p-2 text-xl font-semibold text-black-300 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]"
              onClick={handleFinalSubmit}
            >
              Confirmar
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
