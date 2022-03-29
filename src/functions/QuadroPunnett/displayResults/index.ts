import { quadroPunnett } from "./QuadroPunnett";

console.log("---------------------------------------------------------------");
console.log("---------------------------------------------------------------");
console.log("---------------------------------------------------------------");

console.log("Gabarito");
console.table([
  { Pai: "Aa", Mae: "Aa", Quadro: "AA, Aa, Aa, aa", Castanho: 75, Azul: 25 },
]);
console.log("Resultado");
console.table([quadroPunnett("Aa", "Aa")]);

console.log("---------------------------------------------------------------");
console.log("---------------------------------------------------------------");
console.log("---------------------------------------------------------------");

console.log("Gabarito");
console.table([
  {
    Pai: "AA",
    Mae: "AA",
    Quadro: "AA, AA, AA, AA",
    Castanho: 100,
    Azul: 0,
  },
]);
console.log("Resultado");
console.table([quadroPunnett("AA", "AA")]);

console.log("---------------------------------------------------------------");
console.log("---------------------------------------------------------------");
console.log("---------------------------------------------------------------");

console.log("Gabarito");
console.table([
  {
    Pai: "aa",
    Mae: "aa",
    Quadro: "aa, aa, aa, aa",
    Castanho: 0,
    Azul: 100,
  },
]);
console.log("Resultado");
console.table([quadroPunnett("aa", "aa")]);

console.log("---------------------------------------------------------------");
console.log("---------------------------------------------------------------");
console.log("---------------------------------------------------------------");

console.log("Gabarito");
console.table([
  {
    Pai: "AA",
    Mae: "aa",
    Quadro: "Aa, Aa, Aa, Aa",
    Castanho: 100,
    Azul: 0,
  },
]);
console.log("Resultado");
console.table([quadroPunnett("AA", "aa")]);

console.log("---------------------------------------------------------------");
console.log("---------------------------------------------------------------");
console.log("---------------------------------------------------------------");

console.log("Gabarito");
console.table([
  {
    Pai: "aa",
    Mae: "AA",
    Quadro: "Aa, Aa, Aa, Aa",
    Castanho: 100,
    Azul: 0,
  },
]);
console.log("Resultado");
console.table([quadroPunnett("aa", "AA")]);

console.log("---------------------------------------------------------------");
console.log("---------------------------------------------------------------");
console.log("---------------------------------------------------------------");

console.log("Gabarito");
console.table([
  {
    Pai: "aA",
    Mae: "Aa",
    Quadro: "AA, aa, Aa, Aa",
    Castanho: 75,
    Azul: 25,
  },
]);
console.log("Resultado");
console.table([quadroPunnett("aA", "Aa")]);

console.log("---------------------------------------------------------------");
console.log("---------------------------------------------------------------");
console.log("---------------------------------------------------------------");

console.log("Gabarito");
console.table([
  {
    Pai: "Aa",
    Mae: "aA",
    Quadro: "Aa, AA, aa, Aa",
    Castanho: 75,
    Azul: 25,
  },
]);
console.log("Resultado");
console.table([quadroPunnett("Aa", "aA")]);

console.log("---------------------------------------------------------------");
console.log("---------------------------------------------------------------");
console.log("---------------------------------------------------------------");

console.log("Gabarito");
console.table([
  {
    Pai: "AA",
    Mae: "Aa",
    Quadro: "AA, Aa, AA, Aa",
    Castanho: 100,
    Azul: 0,
  },
]);
console.log("Resultado");
console.table([quadroPunnett("AA", "Aa")]);

console.log("---------------------------------------------------------------");
console.log("---------------------------------------------------------------");
console.log("---------------------------------------------------------------");

console.log("Gabarito");
console.table([
  {
    Pai: "Aa",
    Mae: "AA",
    Quadro: "AA, AA, Aa, Aa",
    Castanho: 100,
    Azul: 0,
  },
]);
console.log("Resultado");
console.table([quadroPunnett("Aa", "AA")]);
