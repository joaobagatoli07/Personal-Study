class ContaBancaria {
    constructor(cliente, numero) {

        if (this.constructor === ContaBancaria) {
            throw Error("Essa é uma classe abstrata")
        }

        this.cliente = cliente
        this.numero = numero
        this.saldo = 0
    }

    depositar(valor) {
        this.saldo += valor
    }

    sacar(valor) {
        throw Error("Método precisa ser implementado")
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(cliente, numero) {
        super(cliente, numero)
        this.limite = 0
    }

    sacar(valor){
        let disponivel = this.saldo + this.limite
        if(valor > disponivel){
            throw Error("Saldo insuficiente")
        }else{
            this.saldo -= valor
        }
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(cliente, numero) {
        super(cliente, numero)
        this.aniversario = new Date()
    }

    sacar(valor){
        if(valor > this.saldo){
            throw Error("Saldo insuficiente")
        }else{
            this.saldo -= valor
        }
    }
}

const cc = new ContaCorrente("Daniel", 5)

const cp1 = new ContaPoupanca("João", 7)
const cp2 = new ContaPoupanca("Maria", 2)

cp1.depositar(1000)
cc.depositar(2000)
cc.limite = 1000
cc.sacar(500)
cc.sacar(3000)
cp2.depositar(3000)
cp2.sacar(1000)