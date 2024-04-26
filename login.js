// Função para verificar preenchimento de formulário
function validarFormulario() {
    var email   = document.getElementById("email").value;
    var senha     = document.getElementById("senha").value;
 
    if (email == "" || senha == "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
    } else{
        window.location.href = "/../inicio.html";
    }
   
}
 
// Função para recuperar senha de usuário
function recuperarSenha() {
    var email = prompt("Por favor, insira o seu email para recuperação de senha:");
    // Aqui você pode implementar a lógica para enviar um email de recuperação de senha
    if (email) {
        alert("Um email de recuperação foi enviado para " + email);
    }
}