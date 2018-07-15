
document.onload = function () {
    atualizaDivSpan();
};

var btnCadastro = document.getElementById('btnCadastro').addEventListener('click', function () {
    var divInputs = document.getElementById('divCadastro').getElementsByTagName('input');
    var objDadosCadastro = new Object();
    for (var i = 0; i < divInputs.length; i++) {
        objDadosCadastro[divInputs[i].id] = divInputs[i].value;
    }
    window.sessionStorage.setItem("cadastroUsuario", JSON.stringify(objDadosCadastro));
    var cadastro = JSON.parse(window.sessionStorage.getItem("cadastroUsuario"));
    window.sessionStorage.setItem("loginRealizado", "sim");
    atualizaDivSpan();
});

var atualizaDivSpan = function () {
    var isUsuarioLogado = window.sessionStorage.getItem("loginRealizado");
    if (isUsuarioLogado != undefined) {
        var divLogado = document.getElementById("divLogado");
        var nomeLogado = JSON.parse(window.sessionStorage.getItem("cadastroUsuario"));
        document.getElementById("spanNomeLogado").textContent = nomeLogado.cadastroNome;
        divLogado.style.display = "block";
    }
};