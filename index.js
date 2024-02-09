const perguntas = [
    {
      pergunta:
        "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: ["var", "let", "const"],
      correta: 2, // "const"
    },
    {
      pergunta: "Qual é a saída da expressão '3' + 2 em JavaScript?",
      respostas: ["5", "32", "Erro"],
      correta: 1, // "5"
    },
    {
      pergunta:
        "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [".push()", ".pop()", ".concat()"],
      correta: 0, // ".push()"
    },
    {
      pergunta: "Qual dos seguintes não é um tipo de dados em JavaScript?",
      respostas: ["Boolean", "String", "Float"],
      correta: 2, // "Float"
    },
    {
      pergunta: "Como você chama uma função chamada 'myFunction'?",
      respostas: [
        "call myFunction()",
        "call function myFunction()",
        "myFunction()",
      ],
      correta: 2, // "myFunction()"
    },
    {
      pergunta: "Qual operador é usado para atribuição de valor em JavaScript?",
      respostas: ["=", "==", ":"],
      correta: 0, // "="
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona todos os elementos com a classe especificada",
        "Seleciona o primeiro elemento com a classe especificada",
        "Seleciona o último elemento com a classe especificada",
      ],
      correta: 1, // "Seleciona o primeiro elemento com a classe especificada"
    },
    {
      pergunta:
        "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [".slice()", ".shift()", ".pop()"],
      correta: 2, // ".pop()"
    },
    {
      pergunta: "Qual dos seguintes é um operador de comparação em JavaScript?",
      respostas: ["+", "-", "==="],
      correta: 2, // "==="
    },
    {
      pergunta:
        "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
      respostas: ["<!-- Comentário -->", "// Comentário", "/* Comentário */"],
      correta: 1, // "// Comentário"
    },
  ];

  const quiz = document.querySelector("#quiz")
  const template = document.querySelector("template")

  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  


  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector("h3").textContent = item.pergunta
    

    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector("dl dt").cloneNode(true)
      dt.querySelector("span").textContent = resposta  
      dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)

      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta

        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }       
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        
      }    

      quizItem.querySelector("dl").appendChild(dt)
    }

     
    quizItem.querySelector("dl dt").remove()




    quiz.appendChild(quizItem)
    
  }
