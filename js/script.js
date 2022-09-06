$(document).ready(function() {

    $('.btn').click(function(e) {
        e.preventDefault()

        let dados = $('#CEP').val()

        let url = `https://viacep.com.br/ws/${dados}/json/`

        console.log(url)

        $.ajax({
            type: 'GET',
            dataType: 'JSON',
            assync: true,
            url: url,
            success: function(dados) {
                console.log('Requisição recebida com sucesso!')
                $('#LOGRADOURO').val(dados.logradouro)
                $('#BAIRRO').val(dados.bairro)
                $('#LOCALIDADE').val(dados.localidade)
                $('#UF').val(dados.uf)
            }
        })
    })
})