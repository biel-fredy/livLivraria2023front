import React, { useState } from 'react';
import CarrinhoLista from '../../components/carrinhoLista/carrinhoLista-index';
import SelecaoCartoes from '../../components/selecaoCartoes/selecaoCartoes-index';
import SelecaoCupons from '../../components/selecaoCupom/selecaoCupom-index';
import SelecaoEndereco from '../../components/selecaoEnderecos/selecaoEnderecos-index';
import { Livro } from '../../components/livForm/model/model';

const Carrinho: React.FC = () => {
  const [carrinho, setCarrinho] = useState<Livro[]>([]);

  const atualizarQuantidade = (livro: Livro, quantidade: number) => {
    const novosLivros = carrinho.map((item) => {
      if (item.titulo === livro.titulo) {
        return { ...item, quantidade: quantidade < 0 ? 0 : quantidade };
      }
      return item;
    });
    setCarrinho(novosLivros);
  };

  const removerDoCarrinho = (livro: Livro) => {
    const novosLivros = carrinho.filter((item) => item.titulo !== livro.titulo);
    setCarrinho(novosLivros);
  };
  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <CarrinhoLista
        carrinho={carrinho}
        atualizarQuantidade={atualizarQuantidade}
        removerDoCarrinho={removerDoCarrinho}
      />
      <h2>Cupons Promocionais</h2>
      <SelecaoCupons />
      <h2>Endereço</h2>
      <SelecaoEndereco />
      <h2>Cartões</h2>
      <SelecaoCartoes />
    </div>
  );
};

export default Carrinho;
