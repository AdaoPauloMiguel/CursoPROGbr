    // Arrays

 var alunos = new Array("Jóse", "Lucas", "Mateus", "Ana");

//  console.log(alunos[3]);

for (var aluno of alunos) {
  console.log(aluno)
  
}

    // Funtions 

function media(n1, n2) {
var media1 = n1;
var media2 = n2;
var media = (media1 + media2) / 2;
// console.log(media);  
return media
}

var resultado1 = media(5, 10);
var resultado2 = media(7, 5);

console.log(resultado1);
console.log(resultado2);

console.log(resultado1 + resultado2);


  //Funcoes simplificadas

function nota (p1 , p2) {

  return (p1 + p2) / 2
}

console.log(nota(20 , 28))


