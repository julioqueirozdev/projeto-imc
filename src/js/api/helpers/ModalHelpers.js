export class ModalHelper {
    //controles da janela modal

    static modal(titulo, texto){
        this.openModal()
        document.querySelector('#titulo').innerHTML = titulo
        document.querySelector('#mensagemModal').innerHTML = `<p>${texto}</p>`
    }

    static openModal(){
        document.querySelector('#modal').classList.add('active')
    }

    static closeModal(){
        document.querySelector('#modal').classList.remove('active')
    }

    static fecharJanela(){
        document.querySelector('#modalClose').addEventListener('click', this.closeModal)
        document.querySelector('#nao').addEventListener('click', this.closeModal)
    }

    // métodos tooglew para visibilidade
    static ocultarBotoes(){
        document.querySelector('#botoesModal').classList.remove('mostrar')
        document.querySelector('#botoesModal').classList.add('ocultar')
    }

    static mostrarBotoes(){
        document.querySelector('#botoesModal').classList.remove('ocultar')
        document.querySelector('#botoesModal').classList.add('mostrar')
    }

}