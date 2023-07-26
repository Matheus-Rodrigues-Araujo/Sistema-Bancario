import { Conta } from "./conta";

export class ContaCorrente extends Conta {
    constructor(limite: number) {
      super();
      this.limite = limite;
    }
  
    transferir(contaDestino: Conta, valor: number): void {
      if (this.saldo + this.limite >= valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
      } else {
        console.log("Saldo insuficiente para transferência.");
      }
    }
  }