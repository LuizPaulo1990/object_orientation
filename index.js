import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { Conta } from './Conta.js';

const cliente1 = new Cliente('Ricardo', 11122233399);


const contaCorrenteCliente1 = new ContaCorrente(0, cliente1, 1001);
const contaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);

const conta = new Conta(0, cliente1, 1001);


// console.log(contaPoupanca1);
// console.log(contaCorrenteCliente1);
console.log(conta);


