/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
// 'use client';

// import React, { useState } from 'react';
// import axios from 'axios';

// export default function ChatComponent({ onClose }) {
//   const [step, setStep] = useState('questionList'); // Controla o fluxo entre as etapas
//   const [response, setResponse] = useState('');

//   const questions = [
//     'O que é tecnologia?',
//     'Qual a importância da ciência?',
//     'O que faz um engenheiro?',
//   ];

//   const handleQuestionClick = async (question) => {
//     try {
//       // Envia a requisição para o backend
//       const res = await axios.post('https://crispy-system-7v7pvgxg9q9wcr4-3333.app.github.dev/sofia-chat', { message: question });

//       // Exibe a resposta no chat
//       setResponse(res.data.reply);

//       // Muda o passo para exibir a resposta
//       setStep('response');
//     } catch (error) {
//       console.error('Erro ao obter resposta do backend:', error);
//       setResponse('Desculpe, não consegui processar sua pergunta.');
//       setStep('response');
//     }
//   };

//   const handleBackToQuestions = () => {
//     // Volta para a lista de perguntas
//     setStep('questionList');
//     setResponse('');
//   };

//   return (
//     <div className="fixed bottom-6 right-6 w-72 h-96 bg-white border border-gray-300 shadow-lg p-4 flex flex-col z-50">
//       <div className="font-bold mb-2">Chat com Sofia</div>

//       {/* Área de mensagens */}
//       <div className="flex-1 overflow-y-auto mb-4">
//         {/* Exibe a lista de perguntas ou a resposta do backend */}
//         {step === 'questionList' ? (
//           questions.map((question, index) => (
//             <button
//               key={index}
//               onClick={() => handleQuestionClick(question)}
//               className="block w-full p-2 text-left bg-gray-200 border border-gray-300 rounded mb-2 hover:bg-gray-300"
//             >
//               {question}
//             </button>
//           ))
//         ) : (
//           <div>
//             <p>{response}</p>
//             <button
//               onClick={handleBackToQuestions}
//               className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
//             >
//               Voltar para outra dúvida
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Botão de fechar */}
//       <button
//         onClick={onClose}
//         className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
//       >
//         Fechar
//       </button>
//     </div>
//   );
// }

'use client';

import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function ChatComponent({ onClose }) {
  return (
    <div className="border-gray-300 fixed bottom-6 right-6 z-50 flex h-96 w-72 flex-col border bg-white p-4 shadow-lg">
      <div className="mb-2 font-bold">Chat com Sofia</div>

      {/* Área de mensagens */}
      <div className="mb-4 flex flex-1 flex-col items-center justify-center gap-5 overflow-y-auto">
        <Avatar
          alt="Sofia"
          src="./assets/sofia.jpg"
          sx={{ width: '120px', height: '120px' }}
        />
        <div
          aria-label="edit"
          className="flex rounded-lg border-2 border-black-300 bg-orange p-2"
        >
          <a
            href="https://wa.me/557197091374"
            className="flex flex-row items-center justify-center gap-2"
          >
            <FaWhatsapp size={35} />
            <p className="text-md text-center font-bold">
              Converse com a Sofia
            </p>
          </a>
        </div>
      </div>

      {/* Botão de fechar */}
      <button
        onClick={onClose}
        className="mt-2 rounded-lg border-2 border-black-300 bg-white px-4 py-2 font-bold text-black-300"
      >
        Fechar
      </button>
    </div>
  );
}
