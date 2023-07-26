import { Pessoa } from "./pessoa"
import { IUsuario } from "../../interfaces/IUsuario"
import { Endereco } from "../enderecos/endereco"
import { ContaCorrente } from "../contas/contaCorrente"
import { ContaPoupanca } from "../contas/contaPoupanca"
import { Conta } from "../contas/conta"

export class Cliente extends Pessoa implements IUsuario {
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

    autenticar(): true  {
        this.vip = true
        return this.vip
    }

}
    