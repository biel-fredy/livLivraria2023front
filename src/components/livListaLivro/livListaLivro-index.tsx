import { Livro } from '../livForm/model/model';

interface ListaLivrosProps {
  livros: Livro[];
}

const ListaLivros: React.FC<ListaLivrosProps> = ({ livros }) => {
  return (
    <div>
      {livros.map((livro, index) => (
        <div key={index}>
          {/* Renderize as informações do livro aqui */}
          <h3>{livro.titulo}</h3>
          {/* Outros campos do livro */}
        </div>
      ))}
    </div>
  );
};

export default ListaLivros;
