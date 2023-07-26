import { Endereco } from "../enderecos/endereco"

export abstract class Pessoa {
    listaEnderecos : Endereco[] = []

    constructor(
        private cpf: string,
        private nome: string,
        private telefone: string,
        private endereco: Endereco
    ){
        this.listaEnderecos.push(this.endereco)
    }

    adicionarEndereco(endereco: Endereco){
        this.listaEnderecos.push(endereco)
    }

    exibirEnderecos(){
        return this.listaEnderecos
    }

    // Nome da Pessoa
    set nomeDaPessoa(valor: string){
        this.nome = valor
    }

    get nomeDaPessoa(): string{
        return this.nome
    }

    // Telefone
    set telefoneAtual(valor: string){
        this.telefone = valor
    }

    get telefoneAtual(): string{
        return this.telefone
    }

}