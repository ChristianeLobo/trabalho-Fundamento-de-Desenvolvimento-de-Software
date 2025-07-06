const botao = document.querySelector("#botao");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", exibirMensagem);

function exibirMensagem () {
    mensagem.innerHTML = "Seja bem-vindo ao meu blog pessoal";
}