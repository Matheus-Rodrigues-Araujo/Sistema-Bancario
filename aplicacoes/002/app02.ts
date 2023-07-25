import { Endereco } from "../../classes/enderecos/endereco";
import { Cliente } from "../../classes/pessoas/cliente";
// import { Endereco } from "../../classes/enderecos/endereco";


const enderecos_1 = new Endereco(
    '12345-678',
    'R. Alguma Coisa', 
    '123', 
    'Casa', 
    'Rio de Janeiro', 
    'RJ'
)

const enderecos_2 = new Endereco(
    '98765-432',
    'R. Alguma Coisa Nova', 
    '456',
    'Casa', 
    'Fortaleza', 
    'CE'
)

const enderecos_3 = new Endereco(
    '98765-432',
    'R. Rua Aleatória', 
    '12A', 
    'Ap', 
    'Fortaleza', 
    'CE'
)

const cliente_1 = new Cliente('34572811198','Eduardo','(88)966551120',enderecos_1,false)
cliente_1.adicionarEndereco(enderecos_2)
cliente_1.adicionarEndereco(enderecos_3)

console.log(cliente_1.exibirEnderecos())
