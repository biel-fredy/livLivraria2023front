import React from 'react';
import { Livro } from '../../components/livForm/model/model'; // Importar o tipo Livro
import { Card, Button, TextField } from '@mui/material'; // Importar elementos do Material-UI

interface CarrinhoListaProps {
  carrinho: Livro[];
  atualizarQuantidade: (livro: Livro, quantidade: number) => void;
  removerDoCarrinho: (livro: Livro) => void;
}

const CarrinhoLista: React.FC<CarrinhoListaProps> = ({
  carrinho,
  atualizarQuantidade,
  removerDoCarrinho,
}) => {
  return (
    <div>
      {carrinho.map((livro, index) => {
        const preco = parseFloat(livro.preco); // Converter o preço para número
        const total = preco * livro.quantidade;
        return (
          <Card key={index}>
            <div>
              <h3>{livro.titulo}</h3>
              <p>Preço: R${livro.preco}</p>
              <TextField
                type="number"
                label="Quantidade"
                defaultValue={1}
                onChange={(e) => atualizarQuantidade(livro, +e.target.value)}
              />
              <Button
                onClick={() => atualizarQuantidade(livro, livro.quantidade + 1)}
              >
                +
              </Button>
              <Button
                onClick={() => atualizarQuantidade(livro, livro.quantidade - 1)}
              >
                -
              </Button>
              <p>Total: R${total}</p>
              <Button onClick={() => removerDoCarrinho(livro)}>
                Remover do Carrinho
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default CarrinhoLista;
