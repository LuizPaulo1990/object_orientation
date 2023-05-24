import { cliente } from './Cliente.js'
export class contaCorrente {
     static numeroDeContas = 0;
    agencia;
    _cliente;
    // #saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;




    set cliente(novoVAlor) {
        if (novoVAlor instanceof cliente) {
            this._cliente = novoVAlor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente,){
        this.agencia = agencia;
        this.cliente = cliente;
        contaCorrente.numeroDeContas += 1;
        
    }





    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}