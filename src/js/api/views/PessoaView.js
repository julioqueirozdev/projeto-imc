import { View } from "./View.js"

export class PessoaView extends View {
    constructor (elemento){
        super(elemento)
    }

    template(model) {
        return `
        <table>
            <thead>
                <tr>
                    <th>ID</th> <th>Nome</th> <th>Idade</th> <th>Peso</th> <th>Altura</th> <th>IMC</th> <th>Situação</th>
                </tr>
            </thead>
            <tbody>
                ${model.pessoas.map((pessoa, indice) => {
                return `
                <tr>
                    <td>${indice}</td>
                    <td>${pessoa._nome}</td>
                    <td>${pessoa._idade}</td>
                    <td>${pessoa._peso}</td>
                    <td>${pessoa._altura}</td>
                    <td>${pessoa._imc.toFixed(2)}</td>
                    <td>${pessoa._classificacao}</td>
                </tr>
                `
            }).join('')}
            </tbody>
        <table>
        `
    } //join junta tudo em uma linha só

}