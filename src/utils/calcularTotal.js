import { cardapio } from "./cardapio.js";

function calcularTotal(itensEQuantidades) {
  const total = itensEQuantidades.reduce((acc, crr) => {
    const valor = cardapio.find((item) => {
      return item.codigo === crr.item;
    }).valor;
    return acc + valor * crr.quantidade;
  }, 0);
  return total;
}

export default calcularTotal;
