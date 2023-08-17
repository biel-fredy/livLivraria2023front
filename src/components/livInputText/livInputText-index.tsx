import React from 'react';
import { Tooltip } from '@mui/material';
import { StyledInput, getTextFieldWidth } from './livInputText-styles';

interface LivInputTextProps {
  name: string;
  label: string;
  placeholder: string;
  validation?: (value: string) => string | null;
  tooltip: string;
  mask?: string;
  value: string;
  onChange: (name: string, value: string) => void;
  size: 'pequeno' | 'medio' | 'grande';
}

const LivInputText: React.FC<LivInputTextProps> = ({
  name,
  label,
  placeholder,
  validation,
  tooltip,
  value,
  onChange,
  size,
}) => {
  const [error, setError] = React.useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    if (validation) {
      setError(validation(newValue));
    }
    onChange(name, newValue);
  };

  return (
    <Tooltip title={tooltip}>
      <StyledInput
        style={{ width: getTextFieldWidth(size) }}
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
