export abstract class Conta {
    constructor(protected numero: string){}

    protected depositar():void{}
    protected sacar():void{}
}  

class Debito{
    constructor(
        private valor: number,
        private data: Date
    ){}
}

class Credito{
    constructor(
        private valor: number,
        private data: Date
    ){}
}
