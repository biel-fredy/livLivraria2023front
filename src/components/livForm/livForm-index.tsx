// FormularioLivro.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { InputContainer } from './livForm-styles';
import { Livro, camposLivro } from './model/model';
import LivInputText from '../livInputText/livInputText-index';
import { BotaoEstilizado } from '../botaoEnviar/botaoEnviar-styles';
import FormContainerWrapper from './formContainerWrapper';

interface Props {
  valoresIniciais?: Partial<Livro>;
  colunas: 1 | 2 | 3;
  onAdicionarLivro: (livro: Livro) => void;
}

const LivForm: React.FC<Props> = ({
  valoresIniciais,
  colunas,
  onAdicionarLivro,
}) => {
  const { handleSubmit, watch, setValue } = useForm<Livro>({
    defaultValues: { ...valoresIniciais },
  });

  const valores = watch();

  const handleChange = (name: string, value: string) => {
    setValue(name as keyof Livro, value);
  };

  const onSubmit = (data: Livro) => {
    console.log(data);
    onAdicionarLivro(data);
  };

  return (
    <FormContainerWrapper onSubmit={handleSubmit(onSubmit)} colunas={colunas}>
      {camposLivro.map((campo) => (
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

export default LivForm;
