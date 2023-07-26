import { Conta } from "./conta"

export class ContaPoupanca extends Conta{

    constructor(numero: string){
        super(numero)
    }

    calcularSaldo():void{} // Retorna a soma de todos os créditos - soma de todos os débitos
}
