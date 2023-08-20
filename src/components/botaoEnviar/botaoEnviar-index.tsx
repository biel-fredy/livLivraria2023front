// BotaoEnviar.tsx
import React from 'react';
import { BotaoEstilizado } from './botaoEnviar-styles';

interface BotaoEnviarProps {
  texto: string;
  url: string;
  dadosFormulario: Record<string, unknown>;
  onSuccess?: () => void;
  onFailure?: () => void;
}

const BotaoEnviar: React.FC<BotaoEnviarProps> = ({
  texto,
  url,
  dadosFormulario,
  onSuccess,
  onFailure,
}) => {
  const enviarFormulario = async () => {
    try {
      const resposta = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosFormulario),
      });

      if (resposta.ok && onSuccess) {
        onSuccess();
      } else if (onFailure) {
        onFailure();
      }
    } catch (erro) {
      console.error(erro);
      if (onFailure) {
        onFailure();
      }
    }
  };

  return <BotaoEstilizado onClick={enviarFormulario}>{texto}</BotaoEstilizado>;
};

export default BotaoEnviar;
