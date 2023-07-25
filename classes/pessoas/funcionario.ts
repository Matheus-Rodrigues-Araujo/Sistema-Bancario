import { Pessoa } from "./pessoa"
import { IUsuario } from "../../interfaces/IUsuario"
import { Endereco } from "../enderecos/endereco"
import { Cargo } from "../cargos/cargo"

export class Funcionario extends Pessoa implements IUsuario {
    private cargos: Cargo[] = []
    private autenticado: boolean = false

    constructor(
        cpf: string, 
        nome: string, 
        telefone: string,
        enderecos: Endereco, 
        private salario: number,
    ){
       super(cpf, nome,telefone, enderecos)
       
    
    }

    adicionarCargo(cargo: Cargo): void{
        this.cargos.push(cargo)

    }

    exibirCargos():Cargo[]{
        console.log('>>> Cargos')
        console.log('>>> Total: ', this.cargos.length)
        return this.cargos
    }

    autenticar(): true  {
        this.autenticado = true
        return this.autenticado
    }
    
}