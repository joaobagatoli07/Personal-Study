class Cliente {
    constructor(nome, documento) {
        this.nome = nome
        this.documento = documento
    }
}

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

    sacar(valor) {
        let disponivel = this.saldo + this.limite
        if (valor > disponivel) {
            throw Error("Saldo insuficiente")
        } else {
            this.saldo -= valor
        }
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(cliente, numero) {
        super(cliente, numero)
        this.aniversario = new Date()
    }

    sacar(valor) {
        if (valor > this.saldo) {
            throw Error("Saldo insuficiente")
        } else {
            this.saldo -= valor
        }
    }
}

// TESTES

const joao = new Cliente("João", 123) 
const maria = new Cliente("Maria", 456)

const cc = new ContaCorrente(joao, 7)
const cp = new ContaPoupanca(maria, 2)