import { Credito } from "./credito"
import { Debito } from "./debito";

export abstract class Conta {
    protected saldo: number = 0;
    protected limite: number = 0;
    protected creditos: Credito[] = [];
    protected debitos: Debito[] = [];
  
    depositar(valor: number): void {
      const credito = new Credito(valor, new Date());
      this.creditos.push(credito);
      this.saldo += valor;
    }
  
    sacar(valor: number): void {
      if (this.saldo + this.limite >= valor) {
        const debito = new Debito(valor, new Date());
        this.debitos.push(debito);
        this.saldo -= valor;
      } else {
        console.log("Saldo insuficiente.");
      }
    }
  
    abstract transferir(contaDestino: Conta, valor: number): void;
  
    calcularSaldo(): number {
      const somaCreditos = this.creditos.reduce((acc, credito) => acc + credito.valor, 0);
      const somaDebitos = this.debitos.reduce((acc, debito) => acc + debito.valor, 0);
      return somaCreditos - somaDebitos + this.limite;
    }
  }