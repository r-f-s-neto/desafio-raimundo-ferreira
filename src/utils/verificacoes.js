export function verificarQuantidade(itensEQuantidades) {
  const total = itensEQuantidades.reduce((acc, crr) => {
    return acc + crr.quantidade;
  }, 0);

  if (total > 0) {
    return true;
  } else {
    return false;
  }
}

export function verificarItens(cardapio, itensEQuantidades) {
  const codigosCardapio = cardapio.map((item) => item.codigo);
  const codigosPedidos = itensEQuantidades.map(
    (itemEQuantidade) => itemEQuantidade.item
  );
  const verificacao = codigosPedidos.map((pedido) => {
    if (codigosCardapio.includes(pedido)) {
      return true;
    } else {
      return false;
    }
  });

  if (verificacao.every((item) => item)) {
    return true;
  } else {
    return false;
  }
}

export function verificarFormaDePagamento(metodoDePagamento) {
  const formasAceitas = ["dinheiro", "debito", "credito"];
  const verificacao = formasAceitas.includes(metodoDePagamento);
  if (verificacao) {
    return true;
  } else {
    return false;
  }
}

export function verificarItensExtras(itensEQuantidades) {
  const temChantily = itensEQuantidades.find((itemEquantidade) => {
    return (
      itemEquantidade.item === "chantily" && itemEquantidade.quantidade > 0
    );
  });

  if (temChantily) {
    const temCafe = itensEQuantidades.find((itemEquantidade) => {
      return itemEquantidade.item === "cafe" && itemEquantidade.quantidade > 0;
    });

    if (!temCafe) {
      return false;
    }
  }

  const temQueijo = itensEQuantidades.find((itemEquantidade) => {
    return itemEquantidade.item === "queijo" && itemEquantidade.quantidade > 0;
  });

  if (temQueijo) {
    const temSanduiche = itensEQuantidades.find((itemEquantidade) => {
      return (
        itemEquantidade.item === "sanduiche" && itemEquantidade.quantidade > 0
      );
    });

    if (!temSanduiche) {
      return false;
    }
  }

  return true;
}

export function descontosETaxas(metodoDePagamento) {
  if (metodoDePagamento === "dinheiro") {
    return 0.95;
  } else if (metodoDePagamento === "credito") {
    return 1.03;
  } else {
    return 1;
  }
}
