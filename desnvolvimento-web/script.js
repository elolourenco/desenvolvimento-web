const formulario = document.getElementById('meuFormulario');
const inputNome = document.getElementById('inputNome');
const botaoSimples = document.getElementById('meuBotao');

// Selecionamos o botão de enviar que está dentro do formulário
const botaoEnviar = formulario.querySelector('button[type="submit"]');

// 1. Lógica do Formulário
formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeDigitado = inputNome.value;
    console.log("Nome enviado: " + nomeDigitado);

    // Mudar cor e texto do botão de enviar (Bootstrap)
    botaoEnviar.textContent = "Enviado!";
    botaoEnviar.classList.replace('btn-primary', 'btn-success'); // De azul para verde

    alert("Olá, " + nomeDigitado + "! Bons estudos!");

    // Limpar campos
    inputNome.value = "";
    inputNome.focus();
});

botaoSimples.addEventListener('click', () => {
    console.log("O botão 'Clique aqui' foi pressionado!");

    // Mudar a cor do botão 
    if (botaoSimples.classList.contains('btn-success')) {
        botaoSimples.classList.replace('btn-success', 'btn-danger'); // Fica vermelho
        botaoSimples.textContent = "Parar!";
    } else {
        botaoSimples.classList.replace('btn-danger', 'btn-success'); // Volta para verde
        botaoSimples.textContent = "Clique aqui";
    }
});