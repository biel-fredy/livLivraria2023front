export interface Livro {
  titulo: string;
  autor: string;
  ano: string;
  preco: string;
}

type NomeCampoLivro = 'titulo' | 'autor' | 'ano' | 'preco';

export const camposLivro: { nome: NomeCampoLivro; placeholder: string }[] = [
  { nome: 'titulo', placeholder: 'Título' },
  { nome: 'autor', placeholder: 'Autor' },
  { nome: 'ano', placeholder: 'Ano' },
  { nome: 'preco', placeholder: 'Preço' },
];