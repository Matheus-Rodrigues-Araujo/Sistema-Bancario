import { Conta } from "./conta";

export class ContaPoupanca extends Conta {
    constructor(limite: number) {
      super();
      this.limite = limite;
    }
  
    transferir(contaDestino: Conta, valor: number): void {

      // console.log("Operação não permitida para Conta Poupança.");
      if (this.saldo + this.limite >= valor) {
        this.sacar(valor) 
        contaDestino.depositar(valor);
      } else {
        console.log("Eita, o saldo é insuficiente para transferência!");
      }
    
    }
}