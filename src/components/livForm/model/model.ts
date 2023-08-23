export interface Livro {
  quantidade: number;
  id: string;
  titulo: string;
  autor: string;
  ano: string;
  preco: string;
  imagemUrl: string;
}

export const valoresIniciaisPadrao: Livro = {
  titulo: '',
  autor: '',
  ano: '',
  preco: '',
  id: '',
  imagemUrl: '',
  quantidade: 0
};

type NomeCampoLivro = 'titulo' | 'autor' | 'ano' | 'preco';

export const camposLivro: { nome: NomeCampoLivro; placeholder: string, label: string }[] = [
  { nome: 'titulo', placeholder: 'Título', label: 'Título' },
  { nome: 'autor', placeholder: 'Autor', label: 'Autor' },
  { nome: 'ano', placeholder: 'Ano', label: 'Ano' },
  { nome: 'preco', placeholder: 'Preço', label: 'Nome' },
];