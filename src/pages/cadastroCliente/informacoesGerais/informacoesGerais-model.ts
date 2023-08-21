import { CampoFormulario } from "../../../model/model";

export const camposInformacoesGerais: CampoFormulario[] = [
  { nome: 'nome', label: 'Nome', tipo: 'texto', obrigatorio: true, placeholder: 'Digite seu nome' },
  { nome: 'email', label: 'E-mail', tipo: 'texto', obrigatorio: true, placeholder: 'Digite seu e-mail' },
];