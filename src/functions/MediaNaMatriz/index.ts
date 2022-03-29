/**
 * Faça um programa que calcule a média dos valores inteiros de uma matriz NxM, apenas nas formas seguintes:
 *  a) Se a matriz tiver mais linhas que colunas, calcular a média de cada linha.
 *  b) Se a matriz tiver mais colunas do que linhas, calcular a média de cada coluna.
 * @param {Number} linhas Quantidade de linhas matriz
 * @param {Number} colunas Quantidade de colunas da matriz
 * @param {Number[][]} matriz Valores inteiros
 * @returns (number[]) Números com duas casas após a vírgula
 * @example Input: linhas: 2, colunas: 3, matriz: [[2, 0, 3], [5, 4, 3]]
 *          Output: [3.5, 2, 3]
 * [2, 0, 3],
 * [5, 4, 3]
 */
export const mediaNaMatriz = (
  linhas: number,
  colunas: number,
  matriz: number[][]
): number[] => {
  if (linhas > colunas) {
    let arraySomaLinhas = [];
    for (let l = 0; l < linhas; l++) {
      let somaLinha = 0;
      for (let c = 0; c < colunas; c++) {
        somaLinha += matriz[l][c];
      }
      arraySomaLinhas.push(somaLinha);
    }

    const medias = arraySomaLinhas.map((item) =>
      Number((item / colunas).toFixed(2))
    );

    return medias;
  }

  let arraySomaColunas = [];

  for (let c = 0; c < colunas; c++) {
    let somaColuna = 0;
    for (let l = 0; l < linhas; l++) {
      somaColuna += matriz[l][c];
    }
    arraySomaColunas.push(somaColuna);
  }

  const medias = arraySomaColunas.map((item) =>
    Number((item / linhas).toFixed(2))
  );

  return medias;
};
