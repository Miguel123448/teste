// Questão 1: Soma simples
function somar(a, b) {
    return a + b;
}

// Questão 2: Multiplicação simples
function multiplicar(a, b) {
    return a * b;
}

// Questão 3: Subtração simples
function subtrair(a, b) {
    return a - b;
}

// Questão 4: Divisão com verificação de zero
function dividir(a, b){
  if(b == 0){
    throw new Error("Erro: divisão por zero");
  }
  return a/b;
}

// Questão 5: Calculadora de média
// Reutiliza a função dividir()
function calcularMedia(nota1, nota2, nota3, nota4) {
    const soma = nota1 + nota2 + nota3 + nota4;
    const quantidade = 4;
    // A função dividir já trata a divisão por zero, mas como a quanti
    return dividir(soma, quantidade);
}

// Questão 6: Exponeciação
// Usa Math.pow() conforme sugestão, mas o operador ** também é válido
function elevarPotencia(base, expoente) {
    // return base ** expoente; // Alternativa
    return Math.pow(base, expoente);
}

// Questão 7: Área de um retângulo
// Reutiliza a função multiplicar()
function calcularAreaRetangulo(largura, altura) {
    return multiplicar(largura, altura);
}

// Questão 8: Par ou ímpar
function verificarParOuImpar(numero) {
    // Usa o operador módulo (%) para verificar se o resto da divisão 
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

// Questão 9: Raiz Quadrada
// Usa Math.sqrt() conforme sugestão
function calcularRaizQuadrada(numero) {
    return Math.sqrt(numero);
}

// Questão 10: Cálculo de Hipotenusa
// Reutiliza somar(), elevarPotencia() e calcularRaizQuadrada()
function calcularHipotenusa(cateto1, cateto2) {
    // 1. Elevar os catetos ao quadrado
    const cateto1Quadrado = elevarPotencia(cateto1, 2);
    const cateto2Quadrado = elevarPotencia(cateto2, 2);

    // 2. Somar os quadrados (Teorema de Pitágoras: a² + b² = c²)
    const somaDosQuadrados = somar(cateto1Quadrado, cateto2Quadrado);

    // 3. Calcular a raiz quadrada da soma (c = √(a² + b²))
    const hipotenusa = calcularRaizQuadrada(somaDosQuadrados);

    return hipotenusa;
}

//Não altere as linhas abaixo
module.exports = {
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
};
