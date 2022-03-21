import { quadroPunnett } from "../functions/QuadroPunnett"

describe('Quadro Punnett', () => {
  it('Deve retornar a probailidade do descente ter olhos castanhos ou azuis, e o quadro de punnet para a combinação AA, AA', () => {
    const result = quadroPunnett('AA', 'AA')

    expect(result).toEqual({"azul": 0, "castanho": 100, "quadro": ["AA", "AA", "AA", "AA"]})
  }),
  it('Deve retornar a probailidade do descente ter olhos castanhos ou azuis, e o quadro de punnet para a combinação AA, Aa', () => {
    const result = quadroPunnett('AA', 'Aa')

    expect(result).toEqual({"azul": 0, "castanho": 100, "quadro": ["AA", "Aa", "AA", "Aa"]})
  }),
  it('Deve retornar a probailidade do descente ter olhos castanhos ou azuis, e o quadro de punnet para a combinação Aa, Aa', () => {
    const result = quadroPunnett('Aa', 'Aa')

    expect(result).toEqual({"azul": 25, "castanho": 75, "quadro": ["AA", "Aa", "Aa", "aa"]})
  }),
  it('Deve retornar a probailidade do descente ter olhos castanhos ou azuis, e o quadro de punnet para a combinação AA, aa', () => {
    const result = quadroPunnett('AA', 'aa')

    expect(result).toEqual({"azul": 0, "castanho": 100, "quadro": ["Aa", "Aa", "Aa", "Aa"]})
  }),
  it('Deve retornar a probailidade do descente ter olhos castanhos ou azuis, e o quadro de punnet para a combinação Aa, AA', () => {
    const result = quadroPunnett('Aa', 'AA')

    expect(result).toEqual({"azul": 0, "castanho": 100, "quadro": ["AA", "AA", "Aa", "Aa"]})
  })
})