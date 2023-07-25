import { Endereco } from "../enderecos/endereco"

export abstract class Pessoa {
    enderecos : Endereco[] = []

    constructor(
        private cpf: string,
        private nome: string,
        private telefone: string,
        private endereco: Endereco
    ){
        this.enderecos.push(this.endereco)
    }

    adicionarEndereco(endereco: Endereco){
        this.enderecos.push(endereco)
    }

    exibirEnderecos(){
        return this.enderecos
    }

}