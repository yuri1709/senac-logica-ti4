class Calculadora{
    valor1; 
    valor2;
    _resultado; //O underline "_" na frente de um tributo indica que ele é privado.(roleplay kkk)
    //o atributo privado só sera utilizado dentro da classe ou seja não podemos atribuir valores pra ele fora da classe.
    //Metodo de soma

    
    //--------------------------------------------------------------
    //pegando o atributo privado(aprendendo a modificar)
        //Encapsulamento - Maneira de se manipukar atributos privados fora da classe.
        //Get - Pega o valor desse atributo(retornar o valor desse atributo)
            get encapResult(){
                return this._resultado;
            }

            //Agora vamos setar o valor do atributo privado _resultado
            //Set - Altera o valor do atributo privado
            set encapResult(valor){
                this._resultado = valor;
            }

    //----------------------------------------------------------------
    soma(numUm, numDois){
        let resultado = numUm + numDois ;
        return resultado;
    }
    subtrair(numUm, numDois){
        let resultado = numUm - numDois;
        return resultado;
    }
    multiplicar(numUm, numDois){
        let resultado = numUm * numDois;
        return resultado;
    }
    divisao(numUm, numDois){
        let resultado = numUm / numDois;
        return resultado;
    }

}

const cGabarito = new Calculadora();

//Exibindo e mostrando o valor do atributo privado
    //Como exibir o _resultado
    cGabarito.encapResult= "teco-teco";
    console.log(cGabarito.encapResult);
//--------------------------.------------------


/*cGabarito._resultado= 20;* nao pode fazer isso,pq o atributo é privado/

console.log(cGabarito.soma(10,1));
console.log(cGabarito.subtrair(30,10));
console.log(cGabarito.multiplicar(10,5));
console.log(cGabarito.divisao(30,2));*/