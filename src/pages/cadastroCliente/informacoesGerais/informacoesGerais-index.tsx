import { useState } from 'react';
import LivInputText from '../../../components/livInputText/livInputText-index';
import Quadro from '../../../components/quadro/quadro-index';

const InformacoesGerais: React.FC = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    genero: '',
    dataNascimento: '',
    cpf: '',
    email: '',
    senha: '',
    confirmacaoSenha: '',
  });

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Quadro titulo="Informações Gerais">
      <form>
        <LivInputText
          name="nomeCompleto"
          label="Nome Completo"
          placeholder="Digite seu nome completo"
          tooltip="Nome completo"
          value={formData.nomeCompleto}
          onChange={handleChange}
          size={'medio'}
        />
        <LivInputText
          name="genero"
          label="Gênero"
          placeholder="Gênero"
          tooltip="Digite o seu gênero"
          value={formData.genero}
          onChange={handleChange}
          size={'medio'}
        />
        <LivInputText
          name="dataNascimento"
          label="Data Nascimento"
          placeholder="Digite sua data de nascimento"
          tooltip="Data de nascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
          size={'grande'}
        />
        <LivInputText
          name="cpf"
          label="CPF"
          placeholder="Digite o seu CPF"
          tooltip="CPF"
          value={formData.cpf}
          onChange={handleChange}
          size={'grande'}
        />
        <LivInputText
          name="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
          tooltip="E-mail"
          value={formData.email}
          onChange={handleChange}
          size={'grande'}
        />
        <LivInputText
          name="senha"
          label="Senha"
          placeholder="Digite aqui a senha"
          tooltip="Sua senha deve ter pelo menos 8 caracteres e conter pelo menos um número"
          value={formData.senha}
          onChange={handleChange}
          size={'grande'}
        />
        <LivInputText
          name="confirmacaoSenha"
          label="Repita sua senha"
          placeholder="Repita aqui sua senha"
          tooltip="Deve ser a mesma senha que digitou acima"
          value={formData.confirmacaoSenha}
          onChange={handleChange}
          size={'grande'}
        />
      </form>
    </Quadro>
  );
};

export default InformacoesGerais;
