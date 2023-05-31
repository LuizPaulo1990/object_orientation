import { Cliente } from './Cliente.js';
import {Gerente} from './funcionarios/Gerente.js';
import {Diretor} from './funcionarios/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor('Rodrigo', 10000,62805930591);
diretor.cadastrarSenha('123456');

const gerente = new Gerente('Gabriel', 5000, 15930577691);
gerente.cadastrarSenha('1234');

const cliente = new Cliente('lais', 78945612379, '456')

const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456');
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '1234');
const clientEstaLogado = SistemaAutenticacao.login(cliente, '456');

console.log(diretorEstaLogado, gerenteEstaLogado, clientEstaLogado);
