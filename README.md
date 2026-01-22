# 📝 Manipulação de Formulários e Eventos com JavaScript

Este repositório contém um exemplo prático de como utilizar JavaScript para manipular o DOM (Document Object Model), gerenciar eventos de formulário e alterar estilos dinamicamente utilizando classes do Bootstrap.

## 🚀 Funcionalidades

- **Captura de Dados**: Recupera o valor digitado no campo de texto de forma em tempo real.
- **Prevenção de Comportamento Padrão**: Utiliza `event.preventDefault()` para processar o formulário sem recarregar a página.
- **Feedback Visual Dinâmico**:
  - O botão de envio altera seu texto para "Enviado!" e sua cor para verde (`btn-success`) após o sucesso.
  - O botão secundário alterna entre as cores verde e vermelho e muda o texto a cada clique.
- **User Experience (UX)**: Limpa o campo de entrada automaticamente e devolve o foco (`focus`) para o cursor após o envio.

## 🛠️ Tecnologias

- **HTML5**: Estruturação dos elementos.
- **JavaScript (ES6+)**: Lógica e manipulação de eventos.
- **Bootstrap 5**: Framework CSS utilizado para as classes de estilização (`btn-primary`, `btn-success`, `btn-danger`).

## 📂 Estrutura do Código JavaScript

O código está organizado em duas partes principais:

1. **Evento de Formulário (`submit`)**: 
   - Captura a entrada do usuário.
   - Dispara um alerta de boas-vindas.
   - Reseta o estado do botão de envio.

2. **Evento de Clique (`click`)**:
   - Demonstra lógica condicional com `classList.contains`.
   - Alterna estados visuais do botão simples.



## 💻 Como utilizar

1. Certifique-se de ter um elemento HTML com os IDs: `meuFormulario`, `inputNome` e `meuBotao`.
2. Certifique-se de que o Bootstrap 5 está importado no seu projeto para que as trocas de cores funcionem corretamente.
3. Abra o console do navegador (F12) para visualizar os logs de depuração.

---
Projetado para estudos de Front-end e manipulação de eventos.
