import { Cliente } from "../../classes/pessoas/cliente";
import { Endereco } from "../../classes/enderecos/endereco";
import { ContaCorrente } from "../../classes/contas/contaCorrente";
const c1_endereco1 = new Endereco('63123-123', 'R. Teopisto Abath', '393', 'Casa', 'Crato', 'CE')
const cliente1 = new Cliente(
    '45698723109',
    'Barry Allen',
    '(88)912343214',
    c1_endereco1,
    false
)

const contaCorrente1 = new ContaCorrente(500)
cliente1.conta = contaCorrente1

cliente1.conta.depositar(100)
cliente1.conta.depositar(100)
cliente1.conta.depositar(100)
console.log(cliente1)
cliente1.conta.depositar(100)
cliente1.conta.sacar(50)

console.log(cliente1.conta.calcularSaldo())




