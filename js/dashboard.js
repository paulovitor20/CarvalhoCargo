document.addEventListener("DOMContentLoaded", function () {
    // Gráfico de Vendas
    new Chart(document.getElementById("graficoVendas"), {
        type: "bar",
        data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai"],
            datasets: [{
                label: "Vendas (R$)",
                data: [3000, 5000, 4000, 7000, 9000],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
            }]
        }
    });

    // Gráfico de Clientes
    new Chart(document.getElementById("graficoClientes"), {
        type: "line",
        data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai"],
            datasets: [{
                label: "Novos Clientes",
                data: [50, 100, 80, 150, 200],
                borderColor: "rgba(255, 99, 132, 1)",
                fill: false,
            }]
        }
    });
});
