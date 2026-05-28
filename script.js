/* MODO NOTURNO */

const botaoContraste = document.getElementById("btn-contraste");

botaoContraste.onclick = function(){

    document.body.classList.toggle("alto-contraste");
};

/* TROCAR PÁGINAS */


function mostrarPagina(idPagina){

    // Seleciona todas as páginas
    const paginas = document.querySelectorAll(".pagina");

    // Remove a classe ativa
    paginas.forEach(function(pagina){

        pagina.classList.remove("ativa");
    });

    // Mostra a página escolhida
    document.getElementById(idPagina).classList.add("ativa");
}

/* CALCULADORA DE CARBONO */

function calcularCarbono(){

    // Captura os valores
    const tratores = Number(document.getElementById("tratores").value);

    const combustivel = Number(document.getElementById("combustivel").value);

    const animais = Number(document.getElementById("animais").value);

    // Fórmula simples de estimativa
    const carbono =
        (tratores * 120) +
        (combustivel * 2.5) +
        (animais * 15);

    // Resultado
    const resultado = document.getElementById("resultado-carbono");

    resultado.innerHTML = `
        <h3>Resultado:</h3>

        <p>
            A estimativa de emissão é de
            <strong>${carbono.toFixed(2)} kg de carbono</strong>.
        </p>
    `;
}