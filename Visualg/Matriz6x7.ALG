Algoritmo "MatrizEntrada"
// Disciplina  :  [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 10/12/2021
Var
   matA:vetor[1..6,1..7]de real
   l,c:inteiro


Inicio
   //Entrada
   Para l de 1 ate 6 faca
      Para c de 1 ate 7 faca
         Escreva ("Digite a matriz:")
         Leia (matA[l,c])
         matA[l,c] <- (matA[l,c])^2
         
      FimPara
   FimPara
   EscrevaL ("")

   //Sa�da
   Para l de 1 ate 6 faca
      Escreva ("[")
      Para c de 1 ate 7 faca
         Escreva(matA[l,c])
      FimPara
         EscrevaL ("]")
   FimPara

Fimalgoritmo