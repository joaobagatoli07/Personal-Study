class Cliente {
    constructor(nome, documento, tipoDocumento) {

        if (this.constructor === Cliente) {
            throw Error("Essa é uma classe abstrata")
        }

        this.nome = nome
        this.documento = documento
        this.tipoDocumento = tipoDocumento
    }
}

class PessoaFisica extends Cliente {
    constructor(nome, documento) {
        super(nome, documento, "CPF")
    }
}

class PessoaJuridica extends Cliente {
    constructor(nome, documento) {
        super(nome, documento, "CNPJ")
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

    get dadosCliente() {
        return `${this.cliente.nome}, ${this.cliente.tipoDocumento}: ${this.cliente.documento}`
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

class Transferir {
    static execute(contaOrigem, contaDestino, valor) {
        if (!contaOrigem instanceof ContaBancaria || 
            !contaDestino instanceof ContaBancaria){
                throw Error("Contas precisam herdar de ContaBancaria")
        }

        try{
            contaOrigem.sacar(valor)
            contaDestino.depositar(valor)
        }catch(e){
            throw Error("Algo deu errado...", e.message)
        }
    }
}

// TESTES

const joao = new PessoaFisica("João", "134.091.360-11")
const kidsGraca = new PessoaJuridica("KidsGraca", "122.133.144/0001-01")

const cc = new ContaCorrente(joao, 7)
const cp = new ContaPoupanca(kidsGraca, 2)

cc.depositar(3000)
cc.limite = 1000

cp.depositar(2000)
cp.sacar(800)

Transferir.execute(cp, cc, 500)