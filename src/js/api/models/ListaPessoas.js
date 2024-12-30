export class ListaPessoas {
    
    //criamos um atributo chamado pessoas que é um array
    constructor (lista=[]){
        this._pessoas = lista
    }

    //método para adicionar pessoa no array
    adiciona(pessoa) {
        this._pessoas.push(pessoa)
    }

    remove(id){
        this._pessoas.splice(id, 1)
    }

    atualiza(id, pessoaAtualizada){
        this._pessoas[id] = pessoaAtualizada
    }

    //programação defensiva retornar uma cópia do array
    //usando o concat, passando o nosso array como parâmetro
    get pessoas() {
        //return this._pessoas
        return [].concat(this._pessoas)
    }
}
