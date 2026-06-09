/* CALCULADORA DE CARBONO */
function calcularCarbono(){
    // Captura os elementos do HTML
    const campoTratores = document.getElementById("tratores");
    const campoCombustivel = document.getElementById("combustivel");
    const campoAnimais = document.getElementById("animais");

    // Verifica se os campos existem na página antes de continuar
    if (!campoTratores || !campoCombustivel || !campoAnimais) {
        console.error("Erro: Um ou mais campos de entrada não foram encontrados no HTML.");
        alert("Erro no sistema: Campos de entrada não encontrados.");
        return;
    }

    // Captura os valores digitados e transforma em número
    const tratores = Number(campoTratores.value);
    const combustivel = Number(campoCombustivel.value);
    const animais = Number(campoAnimais.value);

    // Validação: se o usuário não digitar nada, avisa na tela
    if (campoTratores.value === "" || campoCombustivel.value === "" || campoAnimais.value === "") {
        alert("Por favor, preencha todos os campos da calculadora (coloque 0 se não houver).");
        return;
    }

    // Fórmula simples de estimativa
    const carbono = (tratores * 120) + (combustivel * 2.5) + (animais * 15);

    // Captura a div do resultado
    const resultado = document.getElementById("resultado-carbono");
    
    if (!resultado) {
        console.error("Erro: A div 'resultado-carbono' não foi encontrada no HTML.");
        alert("Erro no sistema: Div de resultado não encontrada.");
        return;
    }

    // Lógica de estimativa: Bom, Médio ou Ruim
    let classificacao = "";
    let corTexto = "";
    let mensagemDica = "";

    if (carbono <= 1500) {
        classificacao = "BOM (Sustentável)";
        corTexto = "var(--cor-destaque)"; 
        mensagemDica = "Sua fazenda está operando com um excelente nível de emissões! Continue aplicando práticas sustentáveis.";
    } else if (carbono > 1500 && carbono <= 5000) {
        classificacao = "MÉDIO (Moderado)";
        corTexto = "#fcd34d"; 
        mensagemDica = "A emissão está moderada. Veja a aba 'ABC' para conhecer planos de redução de carbono no solo.";
    } else {
        classificacao = "RUIM (Alto)";
        corTexto = "#f87171"; 
        mensagemDica = "Alerta de altas emissões! Considere o uso de Bioenergia para substituir combustíveis fósseis e aplique o MIP.";
    }

    // Força a div a ficar visível caso o CSS tenha escondido, e insere o HTML
    resultado.style.display = "block";
    resultado.innerHTML = `
        <div style="margin-top: 20px; padding: 15px; border: 2px solid var(--cor-borda); border-radius: 8px; background-color: var(--cor-botao-fundo); color: var(--cor-texto-claro); display: block !important;">
            <h3 style="color: var(--cor-destaque); margin-top: 0;">Resultado da Análise:</h3>
            <p>A estimativa de emissão é de: <strong>${carbono.toFixed(2)} kg de carbono</strong>.</p>
            <p>Status do Impacto: <span style="color: ${corTexto}; font-weight: bold; font-size: 1.2em;">${classificacao}</span></p>
            <p style="font-style: italic; margin-top: 10px; color: var(--cor-texto-claro); opacity: 0.9;">${mensagemDica}</p>
        </div>
    `;
}
