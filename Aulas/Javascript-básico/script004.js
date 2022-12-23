
var nomes = ["Mateus", "Nelson", "Ana", "Luiza"];
var notaA = [7.5, 8, 6, 4];
var notaB = [8.5, 7, 4, 5];
var notaC = [9, 8, 4, 3];


function media(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

function passou(media){
  var resultado = "Aprovado"

  if (media < 6){
    return "Reprovado" 
  }
  return resultado
}

for (var index in nomes) {
  var nota1 = notaA[index];
  var nota2 = notaB[index];
  var nota3 = notaC[index];

  var m = media (nota1, nota2, nota3)

  console.log( nomes[index] + 
                "-" +
              nota1 +
               "-" + 
               nota2 +
                "-" + 
                nota3 +
                "-" +
                passou(m))
}