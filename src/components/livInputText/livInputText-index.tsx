import React from 'react';
import { TextField, Tooltip } from '@mui/material';

interface LivInputTextProps {
  name: string;
  label: string;
  placeholder: string;
  validation?: (value: string) => string | null;
  tooltip: string;
  mask?: (value: string) => string; // Função para aplicar a máscara
  value: string;
  onChange: (name: string, value: string) => void;
}

const LivInputText: React.FC<LivInputTextProps> = ({
  name,
  label,
  placeholder,
  validation,
  tooltip,
  mask,
  value,
  onChange,
}) => {
  const [error, setError] = React.useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    if (validation) {
      setError(validation(newValue));
    }
    if (mask) {
      newValue = mask(newValue); // Aplica a máscara, se fornecida
    }
    onChange(name, newValue);
  };

  return (
    <Tooltip title={tooltip}>
      <TextField
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        error={Boolean(error)}
        helperText={error}
        fullWidth
      />
    </Tooltip>
  );
};

export default LivInputText;
