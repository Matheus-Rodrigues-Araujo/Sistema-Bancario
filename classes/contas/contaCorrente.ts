import { Conta } from "./conta"

export class ContaCorrente extends Conta{
    constructor(numero: string, private limite: number){
        super(numero)
    }

    transferir(conta: string, contaDestino: string, valor: number):void{}
    calcularSaldo():void{} // Retorna a soma de todos os créditos - soma de todos os débitos
}
