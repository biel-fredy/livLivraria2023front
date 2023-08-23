import React, { useState } from 'react';
import { Button, Select, MenuItem, SelectChangeEvent } from '@mui/material'; // Importar elementos do Material-UI
import { Endereco } from '../../pages/cadastroCliente/enderecos/livFormEnderecos/model';
import Enderecos from '../../pages/cadastroCliente/enderecos/enderecos-index';

const SelecaoEndereco: React.FC = () => {
  const [enderecos] = useState<Endereco[]>([
    // Endereços hard-coded
    {
      apelidoEndereco: 'Casa',
      tipoResidencia: 'Apartamento',
      tipoLogradouro: 'Rua',
      numero: '123',
      bairro: 'Centro',
      cep: '12345-678',
      cidade: 'São Paulo',
      estado: 'SP',
      pais: 'Brasil',
      observacoes: '',
    },
    {
      apelidoEndereco: 'Trabalho',
      tipoResidencia: 'Comercial',
      tipoLogradouro: 'Avenida',
      numero: '456',
      bairro: 'Jardins',
      cep: '23456-789',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      pais: 'Brasil',
      observacoes: '',
    },
    // Mais dois endereços
    /* ... */
  ]);
  const [enderecoSelecionado, setEnderecoSelecionado] = useState<number | null>(
    null,
  );
  const [adicionandoEndereco, setAdicionandoEndereco] = useState(false);

  const handleChange = (event: SelectChangeEvent<number | null>) => {
    // Atualizado para o tipo correto
    setEnderecoSelecionado(event.target.value as number | null);
  };
  return (
    <div>
      <Select value={enderecoSelecionado} onChange={handleChange}>
        {enderecos.map((endereco, index) => (
          <MenuItem key={index} value={index}>
            {' '}
            {/* Aqui está a correção, usando index como valor */}
            {endereco.apelidoEndereco}
          </MenuItem>
        ))}
      </Select>
      <Button onClick={() => setAdicionandoEndereco(true)}>
        Adicionar Novo Endereço
      </Button>
      {adicionandoEndereco && <Enderecos />}
    </div>
  );
};

export default SelecaoEndereco;
