import { useForm } from 'react-hook-form';
import { BotaoEstilizado } from '../../../../components/botaoEnviar/botaoEnviar-styles';
import FormContainerWrapper from '../../../../components/livForm/formContainerWrapper';
import { InputContainer } from '../../../../components/livForm/livForm-styles';
import LivInputText from '../../../../components/livInputText/livInputText-index';
import { Telefone, camposTelefone } from './model';

interface Props {
  valoresIniciaisPadraoTelefone?: Partial<Telefone>;
  colunas: 1 | 2 | 3;
  onAdicionarTelefone: (telefone: Telefone) => void;
}

const LivFormTelefones: React.FC<Props> = ({
  valoresIniciaisPadraoTelefone,
  colunas,
  onAdicionarTelefone,
}) => {
  const { handleSubmit, watch, setValue } = useForm<Telefone>({
    defaultValues: { ...valoresIniciaisPadraoTelefone },
  });

  const valores = watch();

  const handleChange = (name: string, value: string) => {
    setValue(name as keyof Telefone, value);
  };

  const onSubmit = (data: Telefone) => {
    console.log(data);
    onAdicionarTelefone(data);
  };

  return (
    <FormContainerWrapper onSubmit={handleSubmit(onSubmit)} colunas={colunas}>
      {camposTelefone.map((campo) => (
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

export default LivFormTelefones;
