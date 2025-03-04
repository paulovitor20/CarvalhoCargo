function handleLogin(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "teste@teste.com" && password === "1234") {

        // Armazena sessão (opcional)
        sessionStorage.setItem("usuarioLogado", email);

        // Redireciona corretamente
        window.location.href = "../Dashboard/waitingroom.html";
    } else {
        alert("Email ou senha inválidos!");
    }
}

// Adiciona o evento ao formulário de login
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", handleLogin);
});
