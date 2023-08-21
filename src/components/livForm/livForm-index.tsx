// FormularioLivro.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormContainer, InputContainer } from './livForm-styles';
import { Livro, camposLivro } from './model/model';

interface Props {
  valoresIniciais?: Partial<Livro>;
  colunas: 1 | 2 | 3; // Pode ser 1, 2 ou 3 colunas
}

const LivForm: React.FC<Props> = ({ valoresIniciais, colunas }) => {
  const { register, handleSubmit } = useForm<Livro>({
    defaultValues: valoresIniciais,
  });

  const onSubmit = (data: Livro) => {
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} colunas={colunas}>
      {camposLivro.map((campo) => (
        <InputContainer key={campo.nome}>
          <input placeholder={campo.placeholder} {...register(campo.nome)} />
        </InputContainer>
      ))}
      <button type="submit">Enviar</button>
    </FormContainer>
  );
};

export default LivForm;
