export interface Telefone {
  apelidoTelefone: string;
  tipo: string;
  ddd: string;
  numero: string;
}

export const valoresIniciaisPadraoTelefone: Telefone = {
  apelidoTelefone: '',
  tipo: '',
  ddd: '',
  numero: '',
};

type NomeCampoTelefone = 'apelidoTelefone' | 'tipo' | 'ddd' | 'numero';

export const camposTelefone: { nome: NomeCampoTelefone; placeholder: string, label: string }[] = [
  { nome: 'apelidoTelefone', placeholder: 'Apelido Telefone', label: 'Apelido Telefone' },
  { nome: 'tipo', placeholder: 'Tipo', label: 'Tipo' },
  { nome: 'ddd', placeholder: 'DDD', label: 'DDD' },
  { nome: 'numero', placeholder: 'Número', label: 'Número' },
];