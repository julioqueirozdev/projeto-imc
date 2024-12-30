
export class Pessoa {

    // atributos = variáveis ou caracteristicas
    _nome  // tipo string
    _idade  // tipo integer
    _peso // tipo float ou real
    _altura //_ o underline indica que os atributos são privados
    _imc
    _classificacao // tipo string
    static totalPessoas = 0 //atributo estático ou da classe

    // métodos = funções ou comportamentos 
    
    // método construtor
    constructor (nome, idade, peso, altura){
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura
        this._imc = this._peso / (this._altura * this._altura).toFixed(2)
        this._classificacao = this.classificaIMC()
        Pessoa.totalPessoas += 1 // contador com incremento 

    }

    //função sem passagem de parametros pois ja indicamos peso e altura anteriormente 

    // esta função equivale a um metodo get imc
    calculaImc(){
        return this.imc
    }
    // se um método dentro de uma classe possui return, ela é uma função, se não, é um procedimento.

    classificaIMC(valorImc) {
        //pegar o
        valorImc = (this.imc).toFixed(2)
        let classificacao = ''

        if(valorImc < 18.5){
            classificacao = 'Abaixo do Peso'
        } else if (valorImc <= 24.9){
            classificacao = 'Peso Normal'
        } else if (valorImc  <= 29.9){
            classificacao = 'Sobrepeso'
        } else if (valorImc <= 34.9){
            classificacao = 'Obesidade Grau I'
        } else if(valorImc <= 39.9){
            classificacao = 'Obesidade Grau II'
        } else if (valorImc >= 40){
            classificacao = 'Obesidade grau III ou Mórbida'
        } else {
            classificacao = 'Peso Invalido'
        }
        return classificacao
    }

    //get  = pegar uma informação

    get nome () {
        return this._nome
    }

    get imc () {
        return this._imc
    }

    get idade () {
        return this._idade
    }

    get peso (){
        return this._peso
    }

    get altura(){
        return this._altura
    }

    get totalPessoas () {
        return Pessoa.totalPessoas
    }

    // set = configurar, editar, alterar

    set nome(novoNome){
        this._nome = novoNome
    }

    set idade(novaIdade){
        this._idade = novaIdade
    }

    set altura (novaAltura){
        this._altura = novaAltura
    }

    set peso (novoPeso){
        this._peso = novoPeso
    }
}
