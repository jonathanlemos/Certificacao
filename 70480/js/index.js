
var menuIndex = function () {
    var menu = document.getElementById("menu").children;
    for (var j = 0; j < menu.length; j++) {
        var ul = menu[j].children;
        for (var i = 0; i < ul.length; i++) {
            var li = ul[i].addEventListener("click", function (data) {

                //limpa tag de conteudo
                document.getElementById("content").innerHTML = "";

                var pagina = data.toElement.getAttribute("data-menu");
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function (e) {

                    switch(this.readyState)
                    {
                        case 0:
                            document.getElementById("statusMenu").textContent = "Request not initialized";
                            break;

                        case 1:
                            document.getElementById("statusMenu").textContent = "Server connection established"
                            break;

                        case 2:
                            document.getElementById("statusMenu").textContent = "Request received"
                            break;

                        case 3:
                            document.getElementById("statusMenu").textContent = "Processing request"
                            break;

                        case 4:
                            document.getElementById("statusMenu").textContent = "Request finished and response is ready"
                            break;
                    }

                    if (this.status != 200) document.getElementById("statusMenu").textContent = "Erro " + this.status + " em " + pagina + ".html";

                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("content").innerHTML = this.responseText;

                        setTimeout(function () {
                            //limpa campo status carregamento menu
                            document.getElementById("statusMenu").textContent = "";
                        }, 3000);
                    }
                };
                xhttp.open("GET", "PaginasMenu/" + pagina + ".html", true); //não espera até terminar a requisicao com false
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhttp.send();
            }, true);
        }
    }
}

menuIndex();


