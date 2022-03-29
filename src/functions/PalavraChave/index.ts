/**
 * Faça um programa para receber uma linha de texto do
 * usuário e exibir a quantidade de ocorrências de uma palavra
 * informada pelo usuário. Define-se palavra como uma sequência de
 * caracteres delimitados por espaço ou pontuação, e uma linha com, no
 * máximo, 200 caracteres. Evite acentos.
 * @param texto Linha de texto onde será buscada a palavra chave
 * @param palavraChave Palavra que será buscada na frase
 * @returns (number)
 * @example Input: texto: 'Texto digitado em uma frase armazenada em uma string', palavraChave: 'em'
 *          Output: 2
 */

export const palavraChave = (texto: string, palavraChave: string): number => {
  return (
    texto.toLocaleLowerCase().split(palavraChave.toLocaleLowerCase()).length - 1
  );
};
