// Importação do BD
import { setBanco } from "./bancoDados.js";
import { getBanco } from "./bancoDados.js";
import { limpaInput } from "./modulos.js";

const dadosLogin = getBanco();
const bancoDados = 'bd-login';

const setLogin = (jogador) => {
    dadosLogin.unshift({nome: jogador});

    setBanco(bancoDados, dadosLogin);
}

// Elementos HTML
const txtNome = document.querySelector('#txtNome');
const btnCadastrar = document.querySelector('#btnCadastrar');

// Funções

const cadastrar = () => {
    const jogador = txtNome.value;

    // jogador = jogador.trim();
    
    setLogin(jogador);

    limpaInput();

    setTimeout(() => {
        window.location.href = './painel.html';
    }, 2000);

};

const validaDados = ( {target} ) => {
    if(target.value.length > 2) {
        btnCadastrar.removeAttribute('disabled');
        
    }
};
txtNome.addEventListener('input', validaDados);

btnCadastrar.addEventListener('click',cadastrar);
