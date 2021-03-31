/*$(function(){
    $(".cep").hide()
})*/

function consultarCEP(){
    var cep = document.getElementById("CEP").value
    var url = "https://viacep.com.br/ws/"+cep+"/json/"
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response)
            $("#logradouro").html(response.logradouro)
            $("#uf").html(response.uf)
            $("#localidade").html(response.localidade)
            $("#bairro").html(response.bairro)
            $("#titulo_cep").html("Dados sobre o CEP "+response.cep)
            $("#ddd").html(response.ddd)
            
            //$(".cep").show()

            /*$("#logradouro").html(response.logradouro) //O JQuery permite que possamos fazer isso dessa forma, pegar o elemento (# significa que é o ID) e adicionar o que você quer ao HTML dele 
            //document.getElementById("logradouro").innerHTML = response.logradouro
            document.getElementById("complemento").innerHTML = response.complemento
            document.getElementById("bairro").innerHTML = response.bairro
            document.getElementById("localidade").innerHTML = response.localidade
            document.getElementById("uf").innerHTML = response.uf
            document.getElementById("ibge").innerHTML = response.ibge
            document.getElementById("gia").innerHTML = response.gia
            document.getElementById("ddd").innerHTML = response.ddd
            document.getElementById("siafi").innerHTML = response.siafi*/
        }
    })
}