export interface CampoFormulario {
  nome: string;
  label: string;
  tipo: 'texto';
  obrigatorio: boolean;
  placeholder?: string;
}