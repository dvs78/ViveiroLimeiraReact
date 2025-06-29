// OBTER LISTA ÚNICA DE UMA LISTA DE OBJETOS
export const obterListaUnica = (lista, chave) => {
  return [...new Set(lista.map((item) => item[chave]))];
};
