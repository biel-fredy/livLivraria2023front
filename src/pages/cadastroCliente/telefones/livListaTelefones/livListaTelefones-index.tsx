import { Telefone } from '../livFormTelefones/model';

interface ListaTelefonesProps {
  telefones: Telefone[];
}

const ListaTelefones: React.FC<ListaTelefonesProps> = ({ telefones }) => {
  return (
    <div>
      {telefones.map((telefone, index) => (
        <div key={index}>
          {/* Renderize as informações do livro aqui */}
          <h3>{telefone.apelidoTelefone}</h3>
          {/* Outros campos do livro */}
        </div>
      ))}
    </div>
  );
};

export default ListaTelefones;
