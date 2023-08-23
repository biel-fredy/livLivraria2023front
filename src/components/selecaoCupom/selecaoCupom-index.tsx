import React, { useState } from 'react';
import { Button, TextField, Card } from '@mui/material'; // Importar elementos do Material-UI

const SelecaoCupons: React.FC = () => {
  const [cupons, setCupons] = useState<string[]>([]);
  const [cupomInput, setCupomInput] = useState('');

  const adicionarCupom = () => {
    if (cupomInput) {
      setCupons([...cupons, cupomInput]);
      setCupomInput('');
    }
  };

  const removerCupom = (index: number) => {
    setCupons(cupons.filter((_, i) => i !== index));
  };

  return (
    <div>
      <TextField
        label="Cupom"
        value={cupomInput}
        onChange={(e) => setCupomInput(e.target.value)}
      />
      <Button onClick={adicionarCupom}>Adicionar Cupom</Button>
      <div>
        {cupons.map((cupom, index) => (
          <Card key={index}>
            <p>{cupom}</p>
            <Button onClick={() => removerCupom(index)}>Remover</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SelecaoCupons;
