/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import Fab from '@mui/material/Fab';
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WidgetFloatingComponent() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = () => setIsChatOpen(true);
  const handleCloseChat = () => setIsChatOpen(false);

  return (
    <>
      {/* Botão flutuante */}
      {!isChatOpen && (
        <Fab
          aria-label="edit"
          className="fixed bottom-4 right-4 bg-orange"
          onClick={handleOpenChat}
        >
          <FaWhatsapp size={35} />
        </Fab>
      )}
    </>
  );
}
