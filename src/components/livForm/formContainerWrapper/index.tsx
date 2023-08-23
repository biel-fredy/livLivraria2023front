import { FormContainer } from '../livForm-styles';

interface FormContainerWrapperProps {
  colunas: number;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
}

const FormContainerWrapper: React.FC<FormContainerWrapperProps> = ({
  colunas,
  children,
  onSubmit,
}) => {
  const columnStyle = {
    '--colunas': 100 / colunas - 2 + '%',
  } as React.CSSProperties;

  return (
    <FormContainer style={columnStyle} onSubmit={onSubmit}>
      {children}
    </FormContainer>
  );
};

export default FormContainerWrapper;
