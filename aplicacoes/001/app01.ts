import { Funcionario } from "../../classes/pessoas/funcionario";
import { Cargo } from "../../classes/cargos/cargo";
import { Endereco } from "../../classes/enderecos/endereco";


// 1º Funcionário(a) do banco
const endereco_funcionarioDoBanco_1 = new Endereco(
    '12345-123',
    'R. Agatha Mouro',
    '123',
    'Casa',
    'São Paulo',
    'SP'
)
const funcionarioDoBanco_1 = new Funcionario(
    '12345678912',
    'David Jr',
    '(88) 988887777',
    endereco_funcionarioDoBanco_1,
    2300
)

// 2º Funcionário(a) do banco
const endereco_funcionarioDoBanco_2 = new Endereco(
    '63100-172',
    'R. André Cartaxo',
    '123',
    'Casa',
    'Crato',
    'CE'
)
const funcionarioDoBanco_2 = new Funcionario(
    '12345678912',
    'João Neto da Silva',
    '(88) 924356781',
    endereco_funcionarioDoBanco_2,
    2300
)

// Atendente 
const endereco_atendente = new Endereco(
    '99945-456',
    'R. São Miguel',
    '190',
    'Casa',
    'Crato',
    'CE'
)
const atendente_1 = new Funcionario(
    '12345678912',
    'Gabriela Fonseca',
    '(88) 988543219',
    endereco_atendente,
    2000
)

// Gerente
const endereco_gerente = new Endereco(
    '62790-254',
    'R. São Miguel',
    '190',
    'Casa',
    'Crato',
    'CE'
)
const gerente_1 = new Funcionario(
    '09837465211',
    'Robert Downey Jr',
    '(88) 900667762',
    endereco_gerente,
    10000
)

// Cargos
const cargo_FuncionarioDoBanco = new Cargo('Funcionário do banco')
const cargo_Atendente = new Cargo('Atendente')
const cargo_Gerente = new Cargo('Gerente')
const cargo_Analista = new Cargo('Analista')

// Funcionários
funcionarioDoBanco_1.adicionarCargo(cargo_FuncionarioDoBanco)
funcionarioDoBanco_2.adicionarCargo(cargo_FuncionarioDoBanco)
atendente_1.adicionarCargo(cargo_Atendente)
gerente_1.adicionarCargo(cargo_Gerente)
gerente_1.adicionarCargo(cargo_Analista)


console.log(funcionarioDoBanco_1)
console.log(funcionarioDoBanco_2)
console.log(atendente_1)
console.log(gerente_1)
// console.log(gerente_1.exibirCargos())
