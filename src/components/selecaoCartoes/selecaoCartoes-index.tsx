import React, { useState } from 'react';
import { Card, TextField } from '@mui/material';

interface Cartao {
  numero: string;
  nome: string;
  validade: string;
  cvv: string;
}

const SelecaoCartoes: React.FC = () => {
  const cartoes: Cartao[] = [
    {
      numero: '1234 5678 9012 3456',
      nome: 'João Silva',
      validade: '12/24',
      cvv: '123',
    },
    {
      numero: '2345 6789 0123 4567',
      nome: 'Maria Oliveira',
      validade: '06/23',
      cvv: '456',
    },
    // Você pode adicionar mais cartões aqui
  ];
  const [valorCartao, setValorCartao] = useState<{ [key: string]: string }>({});

  const atualizarValor = (numero: string, valor: string) => {
    setValorCartao({ ...valorCartao, [numero]: valor });
  };

  return (
    <div>
      {cartoes.map((cartao, index) => (
        <Card key={index}>
          <p>{cartao.numero}</p>
          <TextField
            label="Valor"
            value={valorCartao[cartao.numero] || ''}
            onChange={(e) => atualizarValor(cartao.numero, e.target.value)}
          />
        </Card>
      ))}
    </div>
  );
};

export default SelecaoCartoes;
