var StarWebSocket = new function () {

    var inc = document.getElementById('incomming');
    inc.innerHTML += "Connecting to server...</br>";

    //objeto web socket e o caminho onde ele vai se conectar
    var ws = new WebSocket('ws://localhost:8181/teste');

    //aqui tratamos quando o websocket recebe uma mensagem
    ws.onmessage = function (e) {
        inc.innerHTML += e.data + '</br>';
    };

    //função que siginifca que a a conexão está ativa
    //só é executada após o handshake está completo
    ws.onopen = function (e) {
        inc.innerHTML += e.data + '.. connection open</br>';
    };

    //executa quando a conexão fechar
    ws.onclose = function (e) {
        inc.innerHTML += e.data + '.. connection closed</br>';
    };

    //função para tratar erros
    ws.onerror = function (e) {
        inc.innerHTML += e.data;
    };
};

document.onload = function () {
    StarWebSocket();
};