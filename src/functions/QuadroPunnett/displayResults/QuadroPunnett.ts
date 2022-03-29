import { stringify } from "querystring";

interface IQuadroPunnettResponse {
  Pai: string;
  Mae: string;
  Quadro: string;
  // quadro: Array<string>;
  Castanho: number;
  Azul: number;
}

/**
 * Criado pelo geneticista inglês Reginald Punnett (1875 – 1967), o quadro de Punnett é a maneira mais simples de resolver os
 * problemas de biologia genética que envolvem monoibridismo e
 * diibridismo. Com ele você pode visualizar os gametas de cada genitor e os possíveis genótipos e fenótipos resultantes de um cruzamento
 * Nesse sentido, faça um programa para simular um quadro de Punnet,
 * utilizando uma matriz, recebendo como entrada os genótipos (dominante ou recessivo) com relação à cor dos olhos. Considere que o gene A determina
 * cor de olhos castanhos e o gene a determina cor azul. Como saída, os cruzamentos possíveis devem ser exibidos, bem como a probabilidade do
 * filho ter olhos azuis e a probabilidade dele ter olhos castanhos.
 * Considere que primeiro são inseridos os gametas do pai e depois os da mãe
 * @param gametaPai Gameta do pai (ex: 'AA')
 * @param gametaMae Gameta da mãe (ex: 'Aa')
 * @returns ({ quadro: string[], castanho: number, azul: number })
 * @example Input: gametaPai: 'AA', gametaMae: 'Aa'
 *          Output: { quadro: [ 'AA', 'Aa', 'AA', 'Aa' ], castanho: 100, azul: 0 }
 * @example Input: gametaPai: 'Aa', gametaMae: 'Aa'
 *          Output: { tabela: [ 'AA', 'Aa', 'Aa', 'aa' ], castanho: 75, azul: 25 }
 */
export const quadroPunnett = (
  gametaPai: string,
  gametaMae: string
): IQuadroPunnettResponse => {
  let quadro: Array<string> = [];

  quadro.push(gametaMae[0] + gametaPai[0]);
  quadro.push(gametaMae[1] + gametaPai[0]);
  quadro.push(gametaMae[0] + gametaPai[1]);
  quadro.push(gametaMae[1] + gametaPai[1]);

  let quadroSorted = quadro.map((gameta) => gameta.split("").sort().join(""));

  let castanho = 0;
  let azul = 0;

  quadroSorted.forEach((gameta) => {
    if (gameta === "AA" || gameta === "Aa") {
      castanho += 25;
    } else {
      azul += 25;
    }
  });

  return {
    Pai: gametaPai,
    Mae: gametaMae,
    Quadro: quadroSorted.join(", "),
    Castanho: castanho,
    Azul: azul,
  };
};
