//JavaScript Object Notation (JSON) é um formato baseado em texto padrão para representar dados estruturados com base na sintaxe do objeto JavaScript. É comumente usado para transmitir dados em aplicativos da Web (por exemplo, enviar alguns dados do servidor para o cliente, para que possam ser exibidos em uma página da Web ou vice-versa). Você se deparará com isso com bastante frequência, portanto, neste artigo, oferecemos tudo o que você precisa para trabalhar com o JSON usando JavaScript, incluindo a análise do JSON para que você possa acessar os dados dentro dele e criar o JSON.

let a = {
    nome: "Lucas",
    nota: 9.8
}
console.log(a)

 let b = JSON.stringify(a)
 console.log(b)

 let a1 = `{
 "nome":"Marcos", 
 "nota": 8.5}`
console.log(a1)

let b1 = JSON.parse(a1)
console.log(b1)


//Nota: Converter uma string em um objeto nativo é chamado de análise, enquanto a conversão de um objeto nativo em uma string(JSON.parse) para que possa ser transmitida pela rede é chamada de stringification (JSON.stringify).
