export const maskCurrency = (value: string) => {
  // Aplica uma máscara de moeda simples
  return value.replace(/\D/g, '').replace(/(\d{1,3})(\d{2})$/, '$1.$2');
};