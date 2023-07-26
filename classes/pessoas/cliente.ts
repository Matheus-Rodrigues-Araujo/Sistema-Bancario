import { Pessoa } from "./pessoa"
import { IUsuario } from "../../interfaces/IUsuario"
import { Endereco } from "../enderecos/endereco"
import { ContaCorrente } from "../contas/contaCorrente"
import { ContaPoupanca } from "../contas/contaPoupanca"
import { Conta } from "../contas/conta"

export class Cliente extends Pessoa implements IUsuario {
    // private contaCorrente: ContaCorrente | null = null
    // private contaPoupanca: ContaPoupanca | null = null
    conta: Conta | null = null

    constructor(
         cpf: string,
         nome: string,
         telefone: string,
         endereco: Endereco,
         private vip: boolean
    ){
        super(cpf, nome, telefone, endereco)
    }



    // getContaCorrente(): ContaCorrente | null{
    //     return this.contaCorrente
    // }

    // getContaPoupanca(): ContaPoupanca | null {
    //     return this.contaPoupanca
    // }

    autenticar(): true  {
        this.vip = true
        return this.vip
    }

}
    