import { Cliente } from "../../classes/pessoas/cliente";
import { Endereco } from "../../classes/enderecos/endereco";
import { ContaCorrente } from "../../classes/contas/contaCorrente";
import { ContaPoupanca } from "../../classes/contas/contaPoupanca";
const c1_endereco1 = new Endereco('98765-123', 'R. Alguma coisa', '42B', 'Ap', 'Crato', 'CE')
const cliente1 = new Cliente(
    '99998723109',
    'Bruce Wayne',
    '(88)912343999',
    c1_endereco1,
    false
)

const contaCorrente1 = new ContaCorrente(500)
cliente1.conta = contaCorrente1

cliente1.conta.depositar(1000)
// cliente1.conta.depositar(100)
// console.log(cliente1)
// cliente1.conta.depositar(100)
// cliente1.conta.sacar(50)

const c2_endereco1 = new Endereco('10065-123', 'R. Alguma coisa', '10B', 'Ap', 'São Paulo', 'SP')
const cliente2 = new Cliente(
    '99998723109',
    'Alfredo Lima',
    '(88)91231239',
    c1_endereco1,
    false
)

const contaPoupanca1 = new ContaPoupanca(500)
cliente2.conta = contaPoupanca1
console.log(cliente2)
cliente2.conta.depositar(1000)
console.log('----------------')
console.log(cliente2)
cliente1.conta.transferir(cliente2.conta, 500)
console.log('----------------')
console.log(cliente2)


// console.log(cliente1.conta.calcularSaldo())




