// Condicionais IF .

var idade = 17

if (idade >= 18) {
  console.log('Pode comprar bebidas alcoolicas')
} else {
  console.log('Não Pode comprar bebidas alcoolicas')
}

// Operador Ternário.

var idad = 9

var pode = idad >= 18 ? 'pode' : 'nao pode'
console.log(pode)

// Condicionais Switch.

var nota1 = 7
var nota2 = 6

var media = (nota1 + nota2) / 2
var conceito = ''

if (media >= 8.5) {
  conceito = 'ótimo'
} else if (media >= 6) {
  conceito = 'bom'
} else {
  conceito = 'regular'
}

switch (conceito) {
  case 'ótimo':
    console.log('Sua média é ' + media + ' Parabéns você é um ótimo aluno')
    break

  case 'bom':
    console.log(
      'Sua média é ' +
        media +
        ' Você é um bom aluno continue se aplicando para melhorar'
    )
    break

  case 'regular':
    console.log('Sua média é ' + media + ' Estude mais')
    break

  default:
    console.log('Sua média é ' + media + ' houve um erro')
    break
}

// Repetição For e While .

var numero = 3
while (numero < 10) {
  console.log('Numero ' + numero)
  numero++
}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}