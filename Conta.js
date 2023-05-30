import { Cliente } from './Cliente.js'

export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if(this.constructor == Conta){
            console.log('você não deveria instanciar um objeto do tipo conta. ')
        }
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    


    depositar(valor){
        if(valor <= 100){
            return;
        }
        this._saldo += valor;
    }

    sacar(valor) {
        let taxa = 1;
        return this._sacar(valor, taxa);
    }

    _sacar(valor , taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    transferir(valor, conta) {
        let valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}