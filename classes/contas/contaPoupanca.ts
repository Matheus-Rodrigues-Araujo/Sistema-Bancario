import { Conta } from "./conta"

export class ContaPoupanca extends Conta{

    constructor(numero: string,private limite: number){
        super(numero)
    }

    calcularSaldo():void{} // Retorna a soma de todos os créditos - soma de todos os débitos
}
