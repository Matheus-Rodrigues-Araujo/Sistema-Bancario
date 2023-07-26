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

}