import { palavraChave } from "../functions/PalavraChave"

describe('Media na matriz', () => {
  it('Deve retornar a quantidade de ocorrencias na frase para a palavra chave "em"', () => {
    const result = palavraChave('Texto digitado em uma frase armazenada em uma string', 'em')

    expect(result).toEqual(2)
  }),
  it('Deve retornar a quantidade de ocorrencias na frase para a palavra chave "under"', () => {
    const result = palavraChave('The quick brown fox jumps over the lazy dog', 'under')

    expect(result).toEqual(0)
  }),
  it('Deve retornar a quantidade de ocorrencias na frase para a palavra chave "id"', () => {
    const result = palavraChave('Cras in lorem id elit tempus ultricies id sed magna.', 'id')

    expect(result).toEqual(2)
  }),
  it('Deve retornar a quantidade de ocorrencias na frase para a palavra chave "amet"', () => {
    const result = palavraChave('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'amet')

    expect(result).toEqual(1)
  }),
  it('Deve retornar a quantidade de ocorrencias na frase para a palavra chave " "', () => {
    const result = palavraChave('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', ' ')

    expect(result).toEqual(7)
  })
})