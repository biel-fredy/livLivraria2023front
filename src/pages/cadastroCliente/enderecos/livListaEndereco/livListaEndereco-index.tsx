import { Endereco } from '../livFormEnderecos/model';

interface ListaEnderecosProps {
  enderecos: Endereco[];
}

const ListaEnderecos: React.FC<ListaEnderecosProps> = ({ enderecos }) => {
  return (
    <div>
      {enderecos.map((endereco, index) => (
        <div key={index}>
          {/* Renderize as informações do livro aqui */}
          <h3>{endereco.apelidoEndereco}</h3>
          {/* Outros campos do livro */}
        </div>
      ))}
    </div>
  );
};

export default ListaEnderecos;
