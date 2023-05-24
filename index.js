import {cliente} from './Cliente.js'
import {contaCorrente} from './ContaCorrente.js'

const cliente1 = new cliente('Ricardo',11122233309 );

const cliente2 = new cliente('Alice', 88822233309);

const contaCorrenteRicardo = new contaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
const conta2 = new contaCorrente(102, cliente2);

contaCorrenteRicardo.transferir(200, conta2);

console.log(contaCorrente.numeroDeContas);




