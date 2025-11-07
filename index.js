/**** Escreva o código abaixo 👇******/
const somar = (a, b) => {
    return a + b;
};

const multiplicar = (a, b) => {
    return a * b;
};

const subtrair = (a, b) => {
    return a - b;
};

const dividir = (a, b) => {
    if (b === 0) {
        return "Erro: divisão por zero";
    }
    return a / b;
};

const calcularMedia = (nota1, nota2, nota3, nota4) => {
    const somaNotas = nota1 + nota2 + nota3 + nota4;
    const quantidadeNotas = 4;
    
    return dividir(somaNotas, quantidadeNotas); 
};

const elevarPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
};

const calcularAreaRetangulo = (largura, altura) => {
    return multiplicar(largura, altura);
};

const verificarParOuImpar = (numero) => {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
};

const calcularRaizQuadrada = (numero) => {
    return Math.sqrt(numero);
};

const calcularHipotenusa = (cateto1, cateto2) => {
    const cateto1Quadrado = elevarPotencia(cateto1, 2);
    const cateto2Quadrado = elevarPotencia(cateto2, 2);
    
    const somaDosQuadrados = somar(cateto1Quadrado, cateto2Quadrado);
    
    const hipotenusa = calcularRaizQuadrada(somaDosQuadrados);

    return hipotenusa;
};

/**** Escreva o código acima ☝️******/

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
