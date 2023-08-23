// FormularioLivro.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Endereco, camposEndereco } from './model';
import FormContainerWrapper from '../../../../components/livForm/formContainerWrapper';
import { InputContainer } from '../../../../components/livForm/livForm-styles';
import LivInputText from '../../../../components/livInputText/livInputText-index';
import { BotaoEstilizado } from '../../../../components/botaoEnviar/botaoEnviar-styles';

interface Props {
  valoresIniciaisPadraoEndereco?: Partial<Endereco>;
  colunas: 1 | 2 | 3;
  onAdicionarEndereco: (endereco: Endereco) => void;
}

const LivFormEnderecos: React.FC<Props> = ({
  valoresIniciaisPadraoEndereco,
  colunas,
  onAdicionarEndereco,
}) => {
  const { handleSubmit, watch, setValue } = useForm<Endereco>({
    defaultValues: { ...valoresIniciaisPadraoEndereco },
  });

  const valores = watch();

  const handleChange = (name: string, value: string) => {
    setValue(name as keyof Endereco, value);
  };

  const onSubmit = (data: Endereco) => {
    console.log(data);
    onAdicionarEndereco(data);
  };

  return (
    <FormContainerWrapper onSubmit={handleSubmit(onSubmit)} colunas={colunas}>
      {camposEndereco.map((campo) => (
        <InputContainer key={campo.nome}>
          <LivInputText
            name={campo.nome}
            label={campo.label}
            placeholder={campo.placeholder}
            tooltip="Informação sobre o campo"
            value={valores[campo.nome]}
            onChange={handleChange}
            size="pequeno"
          />
        </InputContainer>
      ))}
      <BotaoEstilizado type="submit">Enviar</BotaoEstilizado>
    </FormContainerWrapper>
  );
};

export default LivFormEnderecos;
