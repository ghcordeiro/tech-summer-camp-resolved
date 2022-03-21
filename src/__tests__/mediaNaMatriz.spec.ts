import { mediaNaMatriz } from "../functions/MediaNaMatriz"

describe('Media na matriz', () => {
  it('Deve retornar um array com 3 valores, resultantes do cálculo da média de uma matriz 2x3', () => {
    const result = mediaNaMatriz(2, 3, [[2, 0, 3], [5, 4, 3]])

    expect(result).toEqual([3.5, 2, 3])
  }),
  it('Deve retornar um array com 4 valores, resultantes do cálculo da média de uma matriz 4x3', () => {
    const result = mediaNaMatriz(4, 3, [[0, 6, 4], [1, 2, 5], [5, 0, 7], [2, 4, 9]])

    expect(result).toEqual([3.33, 2.67, 4, 5])
  }),
  it('Deve retornar um array com 2 valores, resultantes do cálculo da média de uma matriz 2x2', () => {
    const result = mediaNaMatriz(2, 2, [[0, 6], [1, 2]])

    expect(result).toEqual([0.5, 4])
  })
})