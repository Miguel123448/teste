// Não altere este arquivo
const {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
} = require("./index");

describe("Testes para funções matemáticas", () => {
  test("somar deve retornar a soma de dois números", () => {
    expect(somar(2, 3)).toBe(5);
    expect(somar(-2, 3)).toBe(1);
  });

  test("multiplicar deve retornar o produto de dois números", () => {
    expect(multiplicar(2, 3)).toBe(6);
    expect(multiplicar(-2, 3)).toBe(-6);
  });

  test("subtrair deve retornar a diferença entre dois números", () => {
    expect(subtrair(5, 3)).toBe(2);
    expect(subtrair(3, 5)).toBe(-2);
  });

  test("dividir deve retornar a divisão de dois números e lançar erro ao dividir por zero", () => {
    expect(dividir(6, 3)).toBe(2);
    expect(() => dividir(6, 0)).toThrow("Erro: divisão por zero");
  });

  test("calcularMedia deve retornar a média de quatro notas", () => {
    expect(calcularMedia(7, 8, 9, 10)).toBe(8.5);
    expect(calcularMedia(0, 0, 0, 0)).toBe(0);
  });

  test("elevarPotencia deve retornar a base elevada ao expoente", () => {
    expect(elevarPotencia(2, 3)).toBe(8);
    expect(elevarPotencia(5, 0)).toBe(1);
  });

  test("calcularAreaRetangulo deve retornar a área do retângulo", () => {
    expect(calcularAreaRetangulo(5, 10)).toBe(50);
    expect(calcularAreaRetangulo(0, 10)).toBe(0);
  });

  test('verificarParOuImpar deve retornar "par" se o número for par e "ímpar" se for ímpar', () => {
    expect(verificarParOuImpar(4)).toBe("par");
    expect(verificarParOuImpar(7)).toBe("ímpar");
  });

  test("calcularRaizQuadrada deve retornar a raiz quadrada do número", () => {
    expect(calcularRaizQuadrada(16)).toBe(4);
    expect(calcularRaizQuadrada(9)).toBe(3);
  });

  test("calcularHipotenusa deve retornar o valor correto da hipotenusa", () => {
    expect(calcularHipotenusa(3, 4)).toBe(5); // Teorema de Pitágoras: 3² + 4² = 9 + 16 = 25, raiz quadrada de 25 é 5
    expect(calcularHipotenusa(6, 8)).toBe(10);
  });
});
