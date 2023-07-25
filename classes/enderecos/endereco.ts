export class Endereco {
    constructor(
        private cep: string,
        private logradouro: string,
        private numero: string,
        private complemento: string,
        private cidade: string,
        private uf: string
    ){}

    exibirEndereco(){
        return `Endereço:\n${this.logradouro}, ${this.numero}\n${this.cidade}/${this.uf}`
        
    }
}

// const endereco1 = new Endereco('63123-123', 'R. Teopisto Abath', '393', 'Casa', 'Crato', 'CE')
// console.log(endereco1.exibirEndereco())

