import { Conta } from "./conta";

export class ContaPoupanca extends Conta {
    constructor(saldo: number) {
      super(saldo);
      this.saldo = saldo;
    }
    
    transferir(contaDestino: Conta, valor: number): void {

      // console.log("Operação não permitida para Conta Poupança.");
      if (this.saldo >= valor) {
        this.sacar(valor) 
        contaDestino.depositar(valor);
      } else {
        console.log("Eita, o saldo é menor que o valor informado");
      }
    
    }
}