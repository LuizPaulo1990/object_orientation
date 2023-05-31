import { Cliente } from '../Cliente.js'
//classe abstrata não pode ser instânciada, só serve para ser herdada.
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error('você não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata.');
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
       
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

    // método abstrato.
    sacar(valor) {
      throw new Error('o métido sacar da conta é abstrato.')
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