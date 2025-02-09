function handleLogin(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "teste@teste.com" && password === "1234") {
        alert("Login bem-sucedido!");
        window.location.href = "../Dashboard/index.html"; // Redireciona após login
    } else {
        alert("Email ou senha inválidos!");
    }
}
    