import { Credito } from "./credito"
import { Debito } from "./debito";

export abstract class Conta {
  private data = new Date().toDateString()

  constructor(
    protected saldo: number = 0,
    protected limite: number = 0,
    protected creditos: Credito[] = [],
    protected debitos: Debito[] = [],
  ){}
  
    get valorLimite():string{
      return  'Limite atual: R$' + this.limite
    }

    set valorLimite(valor: number){
      this.limite = valor
    }

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
      const somaCreditos = this.creditos.reduce((v, credito) => v + credito.valor, 0);
      const somaDebitos = this.debitos.reduce((v, debito) => v + debito.valor, 0);
      return somaCreditos - somaDebitos + this.limite;
    }
  }