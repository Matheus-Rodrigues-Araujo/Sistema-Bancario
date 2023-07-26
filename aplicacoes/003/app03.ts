import { Cliente } from "../../classes/pessoas/cliente";
import { Endereco } from "../../classes/enderecos/endereco";
const c1_endereco1 = new Endereco('63123-123', 'R. Teopisto Abath', '393', 'Casa', 'Crato', 'CE')


const cliente1 = new Cliente(
    '45698723109',
    'Barry Allen',
    '(88)912343214',
    c1_endereco1,
    false
)

console.log(cliente1)

