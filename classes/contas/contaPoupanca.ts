import { Conta } from "./conta";

export class ContaPoupanca extends Conta {
    constructor(limite: number) {
      super();
      this.limite = limite;
    }
  
    transferir(contaDestino: Conta, valor: number): void {
      console.log("Operação não permitida para Conta Poupança.");
    }
  }