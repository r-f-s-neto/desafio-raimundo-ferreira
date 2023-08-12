import {
  verificarQuantidade,
  verificarItens,
  verificarFormaDePagamento,
  verificarItensExtras,
  descontosETaxas,
} from "./utils/verificacoes.js";
import calcularTotal from "./utils/calcularTotal.js";
import { cardapio } from "./utils/cardapio.js";

class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    if (typeof itens === "undefined" || itens === null || !itens.length) {
      return "Não há itens no carrinho de compra!";
    }
    const itensEQuantidades = itens.map((item) => {
      const arrItemQuantidade = item.split(",");
      return {
        item: arrItemQuantidade[0],
        quantidade: Number(arrItemQuantidade[1]),
      };
    });

    if (!verificarItensExtras(itensEQuantidades)) {
      return "Item extra não pode ser pedido sem o principal";
    }
    if (!verificarItens(cardapio, itensEQuantidades)) {
      return "Item inválido!";
    }
    if (!verificarQuantidade(itensEQuantidades)) {
      return "Quantidade inválida!";
    }
    if (!verificarFormaDePagamento(metodoDePagamento)) {
      return "Forma de pagamento inválida!";
    }

    const descontoOuTaxa = descontosETaxas(metodoDePagamento);

    const total = calcularTotal(itensEQuantidades) * descontoOuTaxa;

    return "R$ " + total.toFixed(2).replace(".", ",");
  }
}

export { CaixaDaLanchonete };
