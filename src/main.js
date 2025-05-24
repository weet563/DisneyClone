document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]'); //Seleciona os botões com esse DataSet

    //O código irar fazer um loop para todos os botões encontrados e adicionando o evento mensionado
    for (let i = 0; i < buttons.length; i++) { 
        buttons[i].addEventListener('click', function(botao) { // adiciona o evento de click
            const abaAlvo = botao.target.getAttribute('data-tab-button'); // Vai pegar o atributo do botao clicado
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`); // e selecionar a aba com esse mesmo atributo
            const btn = botao.target //Pega o botao alvo

            escondeTodasAbas(); // Aplica essa função
            aba.classList.add('shows__list--is-active'); //Adiciona essa class para ele aparecer
            
            removeBotaoAtivo(); //Aplica essa função
            btn.classList.add('shows__tabs__button--is-active');
        })
    }
})

//Remove a classe de todos os botões 
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

//Remover da classe de todas as abas
function escondeTodasAbas() {
    const tabsContent = document.querySelectorAll('[data-tab-id]'); //Pega as abas com esse dataset

    // Fazer um loop
    for (let i = 0; i < tabsContent.length; i++) {
        tabsContent[i].classList.remove('shows__list--is-active'); //Removendo essa classe de todas as abas
    }
}
