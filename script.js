// FUNÇÃO PARA TROCAR PÁGINAS
function mostrarPagina(idPagina){

    // Seleciona todas as páginas
    let paginas = document.querySelectorAll(".pagina");

    // Remove a classe ativa
    paginas.forEach(function(pagina){
        pagina.classList.remove("ativa");
    });

    // Mostra a página clicada
    document.getElementById(idPagina).classList.add("ativa");
}


// FUNÇÃO SOMAR
function somar(){

    let numero1 = Number(document.getElementById("valor1").value);

    let numero2 = Number(document.getElementById("valor2").value);

    let resultado = numero1 + numero2;

    document.getElementById("resultado").innerHTML =
    "Resultado: " + resultado;
}


// FUNÇÃO MULTIPLICAR
function multiplicar(){

    let numero1 = Number(document.getElementById("valor1").value);

    let numero2 = Number(document.getElementById("valor2").value);

    let resultado = numero1 * numero2;

    document.getElementById("resultado").innerHTML =
    "Resultado: " + resultado;
}


// FUNÇÃO LIMPAR
function limpar(){

    document.getElementById("valor1").value = "";

    document.getElementById("valor2").value = "";

    document.getElementById("resultado").innerHTML =
    "Resultado: 0";
}