export interface Endereco {
  apelidoEndereco: string;
  tipoResidencia: string;
  tipoLogradouro: string;
  numero: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
  pais: string;
  observacoes: string;
}

export const valoresIniciaisPadraoEndereco: Endereco = {
  apelidoEndereco: '',
  tipoResidencia: '',
  tipoLogradouro: '',
  numero: '',
  bairro: '',
  cep: '',
  cidade: '',
  estado: '',
  pais: '',
  observacoes: '',
};

type NomeCampoEndereco = 'apelidoEndereco' | 'tipoResidencia' | 'tipoLogradouro' | 'numero' | 'bairro'| 'cep' | 'cidade' | 'estado' | 'pais'| 'observacoes';

export const camposEndereco: { nome: NomeCampoEndereco; placeholder: string, label: string }[] = [
  { nome: 'apelidoEndereco', placeholder: 'Apelido Endereço', label: 'Apelido Endereço' },
  { nome: 'tipoResidencia', placeholder: 'Tipo Residência', label: 'Tipo Residência' },
  { nome: 'tipoLogradouro', placeholder: 'Tipo Logradouro', label: 'Tipo Logradouro' },
  { nome: 'numero', placeholder: 'Número', label: 'Número' },
  { nome: 'bairro', placeholder: 'Bairro', label: 'Bairro' },
  { nome: 'cep', placeholder: 'CEP', label: 'CEP' },
  { nome: 'cidade', placeholder: 'Cidade', label: 'Cidade' },
  { nome: 'estado', placeholder: 'Estado', label: 'Estado' },
  { nome: 'pais', placeholder: 'País', label: 'País' },
  { nome: 'observacoes', placeholder: 'Observações e complemento', label: 'Observações' },
];