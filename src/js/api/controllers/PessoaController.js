import { Pessoa } from "../models/Pessoa.js"
import { ListaPessoas } from "../models/ListaPessoas.js"
import { PessoaView } from "../views/PessoaView.js"
// import { Mensagem } from "../models/Mensagem.js"
// import { MensagemView } from "../views/MensagemView.js"
import { Modal } from "../models/Modal.js"
import { ModalView } from "../views/ModalView.js"
import { PessoasRepository } from "../repositories/PessoasRepository.js"


export class PessoaController {

    //atributos, propriedades 

    _inputNome
    _inputIdade
    _inputPeso
    _inputAltura

    //metodos

    //construtor
    constructor (){
        this._inputNome = document.querySelector('#nome')
        this._inputIdade = document.querySelector('#idade')
        this._inputPeso = document.querySelector('#peso')
        this._inputAltura = document.querySelector('#altura')


         ///////
        //repositorio
        this._pessoasRepository = new PessoasRepository()
        //console.log(this._pessoasRepository)
        let lista = this._pessoasRepository.ler()
        console.log(lista)
        ////////////////


        //criar lista de pessoas
        this._listaPessoas = new ListaPessoas(lista)

        //view
        this._pessoasView = new PessoaView(document.querySelector('#dados'))
        this._pessoasView.update(this._listaPessoas)

        //mensagem
        // this._mensagem = new Mensagem()
        // this._mensagemView = new MensagemView(document.querySelector('#mensagem'))
        // this._mensagemView.update(this._mensagem)

        //modal
        this._modal = new Modal()
        this._modalView = new ModalView(document.querySelector('#mensagemModal'))
        this._modalView.update(this._modal)

       
    }

    //adicionar pessoa
    adiciona(event){

        event.preventDefault() //mantem a mesma página
        const id = document.querySelector('#idPessoa').value

        //se não tiver id, adiciona senao atualiza
        if(!id){

            //criar uma pessoa
        //adicionar nova pessoa na lista e atualizar a tela
        const pessoaAdd = this._criaPessoa()
        this._listaPessoas.adiciona(pessoaAdd)
        // this._pessoasView.update(this._listaPessoas)

        //adicionar repositorio

        this._pessoasRepository.criar(pessoaAdd)
        this._pessoasView.update(this._listaPessoas)

         //definir e atualizar a mensagem
        // this._mensagem.texto = 'Pessoa cadaastrada com sucesso!'
        // this._mensagemView.update(this._mensagem)

        //modal
        this._modalView(this._modal)

        } else {
            console.log(`ID => ` + id)
            this.atualiza(id) // atualiza do controller
        }

       
    }

    //criar pessoa
    _criaPessoa(){
        return new Pessoa(
            this._inputNome.value,
            this._inputIdade.value,
            this._inputPeso.value,
            this._inputAltura.value
        )
    }

    //limpar formulário
    _limpaFormulario(){
        this._inputNome.value = ''
        this._inputIdade.value = ''
        this._inputPeso.value = ''
        this._inputAltura.value = ''

        this._inputNome.focus()
    }

    preencheFormulario(nome, idade, peso, altura) {
        this._inputNome.value   = nome
        this._inputIdade.value  = idade
        this._inputPeso.value   = peso
        this._inputAltura.value = altura
    }

    apaga(id){
        
        if(!id){
            console.log('ID não foi informado')
            return
        }
        
        //se tem id pode apagar o registro 
        // if(id){
            this._listaPessoas.remove(id)//remove da view
            this._pessoasView.update(this._listaPessoas)//atualizar a view

            this._pessoasRepository.apagar(id) // remove do repository
            console.log('PessoaController Apagou')
        // }
    }


    atualiza(id){
        //criar nova pessoa atualizada
        let pessoaAtualizada = this._criaPessoa()
        console.log(pessoaAtualizada)

        //atualizar repositório
        this._pessoasRepository.atualizar(id, pessoaAtualizada)
        console.log(id, pessoaAtualizada)
        console.log('Atualizou lista')

        //atualizar a lista
        this._listaPessoas.atualiza(id, pessoaAtualizada)
        console.log('Atualizou lista')

        //atualizar a view
        this._pessoasView.update(this._listaPessoas)
        document.querySelector('#idPessoa').value = null

    }

    buscaPorId(id) {
        let pessoaEncontrada = this._pessoasRepository.lerPorId(id)
        return pessoaEncontrada
    }

}