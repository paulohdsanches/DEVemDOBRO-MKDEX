/*
quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos
1 - listagem
2 - cartão do pokémon

precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

- remover a classe aberto só do cartão que está aberto
- ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
-remover a classe ativo que marca o pokémon selecionado
-adicionar a classe ativo no item da lista selecionado 
*/


// precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela
const listaSelecaomks = document.querySelectorAll('.mk')

listaSelecaomks.forEach(mk => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

    mk.addEventListener('click', () => {
        //remover a classe aberto só do cartão que está aberto
        const cartaomkAberto = document.querySelector('.aberto')        
        cartaomkAberto.classList.remove('aberto')

        //ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
        const idmkSelecionado = mk.attributes.id.value

        const idDoCartaomkParaAbrir = 'cartao-' + idmkSelecionado
        const cartaomkParaAbrir = document.getElementById(idDoCartaomkParaAbrir)
        cartaomkParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokémon selecionado
        const mkAtivoNaListagem = document.querySelector('.ativo')
        mkAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado 
        const mkSelecionadoNaListagem = document.getElementById(idmkSelecionado)
        mkSelecionadoNaListagem.classList.add('ativo')

    })
})