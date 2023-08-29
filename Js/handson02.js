function exibirMensagem(){
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    alert("Olá, " + nome +" " + sobrenome);
    alert(`Olá ${nome + " " + sobrenome}`)

}