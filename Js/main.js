$(document).ready(function() {

    $('header button').click(function(){
    $('form').slideDown();
    })

    $('#Botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit',function(e){
        e.preventDefault();
        const endereçoDaNovaImagem = $('#endereço-imagem-nova').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${endereçoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`
        <div class="ouverline-imagem-link">
            <a href="${endereçoDaNovaImagem}" title="Ver imagem de tamanho real" target="_blank">
            Ver a image em tamanho real
            </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereço-imagem-nova').val('');

    })
})