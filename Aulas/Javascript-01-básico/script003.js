//     // Arrays

//  var alunos = new Array("Jóse", "Lucas", "Mateus", "Ana");

// //  console.log(alunos[3]);

// for (var aluno of alunos) {
//   console.log(aluno)
  
// }

//     // Funtions 

// function media(n1, n2) {
// var media1 = n1;
// var media2 = n2;
// var media = (media1 + media2) / 2;
// // console.log(media);  
// return media
// }

// var resultado1 = media(5, 10);
// var resultado2 = media(7, 5);

// console.log(resultado1);
// console.log(resultado2);

// console.log(resultado1 + resultado2);


//   //Funcoes simplificadas

// function nota (p1 , p2) {

//   return (p1 + p2) / 2
// }

// console.log(nota(20 , 28))

// // Objetos

// var aluno = {
//   nome: "Miguel",
//   nota: [9, 8.5, 9],
//   sobreNome: "Paulo"
// }

// console.log(aluno)

// function calcMed(){
//   return (this.nota[0] + this.nota[1]) /2;
// }

// var Estudante1 = {
//   nome:"Nelson",
//   nota:[9, 5],
//   media: calcMed    // Esse é o Metodo .
// }

// var Estudante2 = {
//   nome:"Pedro",
//   nota:[4, 8],
//   media: calcMed
// }

// console.log(Estudante1.nome)
// console.log(Estudante1.media())

// console.log(Estudante2.nome)
// console.log(Estudante2.media())

// Construtor 

function alunos(nome, n1, n2) {
  this.nome = nome;
  this.nota1 = n1;
  this.nota2 = n2;
  
  this.media = function() {
    return (this.nota1 + this.nota2) / 2;
  }
}

var a = new alunos ("Nelo", 8, 6);
var b = new alunos ("Julio", 5, 9);

console.log(a);
console.log(b);



