/* MODO NOTURNO */
const botaoContraste = document.getElementById("btn-contraste");

botaoContraste.onclick = function(){
    document.body.classList.toggle("alto-contraste");

    //  logo
    const logo = document.getElementById("logo");
    if (logo) {
        if (document.body.classList.contains("alto-contraste")) {
            // logo.src = "img/logo_escura.jpg"; 
        } else {
            logo.src = "img/logo1.jpg";
        }
    }
};

/* TROCAR PÁGINAS */
function mostrarPagina(idPagina){
    const paginas = document.querySelectorAll(".pagina");

    paginas.forEach(function(pagina){
        pagina.classList.remove("ativa");
    });

    document.getElementById(idPagina).classList.add("ativa");
}

/* CALCULADORA DE CARBONO */
function calcularCarbono(){
    // Captura os valores
    const tratores = Number(document.getElementById("tratores").value);
    const combustivel = Number(document.getElementById("combustivel").value);
    const animais = Number(document.getElementById("animais").value);

    // Fórmula simples de estimativa
    const carbono = (tratores * 120) + (combustivel * 2.5) + (animais * 15);

    // Resultado
    const resultado = document.getElementById("resultado-carbono");

    // Lógica de estimativa: Bom, Médio ou Ruim
    let classificacao = "";
    let corTexto = "";
    let mensagemDica = "";

    if (carbono <= 1500) {
        classificacao = "BOM (Sustentável)";
        corTexto = "#28a745"; // Verde
        mensagemDica = "Sua fazenda está operando com um excelente nível de emissões! Continue aplicando práticas sustentáveis.";
    } else if (carbono > 1500 && carbono <= 5000) {
        classificacao = "MÉDIO (Moderado)";
        corTexto = "#ffc107"; // Amarelo/Laranja
        mensagemDica = "A emissão está moderada. Veja a aba 'ABC' para conhecer planos de redução de carbono no solo.";
    } else {
        classificacao = "RUIM (Alto)";
        corTexto = "#dc3545"; // Vermelho
        mensagemDica = "Alerta de altas emissões! Considere o uso de Bioenergia para substituir combustíveis fósseis e aplique o MIP.";
    }

    // Resultado renderizado direto no HTML com a cor correspondente
    resultado.innerHTML = `
        <div style="margin-top: 20px; padding: 15px; border: 1px solid #ccc; border-radius: 5px; background-color: #fff;">
            <h3>Resultado da Análise:</h3>
            <p>A estimativa de emissão é de: <strong>${carbono.toFixed(2)} kg de carbono</strong>.</p>
            <p>Status do Impacto: <span style="color: ${corTexto}; font-weight: bold; font-size: 1.2em;">${classificacao}</span></p>
            <p style="font-style: italic; margin-top: 10px; color: #555;">${mensagemDica}</p>
        </div>
    `;
}
