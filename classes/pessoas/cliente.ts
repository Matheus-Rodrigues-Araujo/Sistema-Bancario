import { Pessoa } from "./pessoa"
import { IUsuario } from "../../interfaces/IUsuario"
import { Endereco } from "../enderecos/endereco"

export class Cliente extends Pessoa implements IUsuario {
    // enderecos: Endereco[] = []
    
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

const c1_endereco1 = new Endereco('63123-123', 'R. Teopisto Abath', '393', 'Casa', 'Crato', 'CE')
const c1_endereco2 = new Endereco('60002-198', 'R. Sao Miguel', '03', 'Ap', 'Crato', 'CE')
const cliente1 = new Cliente('123.456.789-12','Eduardo Ferreira', '(88) 91234-7890', c1_endereco1, false )

cliente1.adicionarEndereco(c1_endereco2)
// cliente1.autenticar()
console.log(cliente1)