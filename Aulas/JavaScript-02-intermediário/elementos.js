// Podemos acessar os nosso elementos unsando obetos.

// document.getElementById
// document.getElementsByClassName
// document.getElementsByName
// document.getElementsByTagName
// document.getElementsByTagNameNS
// document.querySelector
// document.querySelectorAll


// Modificando conteúdos...

let para = document.getElementById('par1')


para.className = 'nãoparagrafo' // Alteração para atributos padrão.
para.setAttribute("novo","configurado") // Adição de novo atributo ou para alteração de atribudo que não padrão. 

para.innerHTML = "Novo conteudo <br><br>" // 
para.innerText += "Mais um conteudo adicional"
// para.textContent += "Conteudo adiciondo"



