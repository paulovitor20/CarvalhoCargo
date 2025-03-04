document.addEventListener("DOMContentLoaded", function () {
  const usuarioLogado = sessionStorage.getItem("usuarioLogado");

  if (!usuarioLogado) {
    alert("Você precisa fazer login primeiro!");
    window.location.href = "../Login/index.html";
  }
});
let setorAtual = "Financeiro";

function selecionarSetor(setor) {
  setorAtual = setor;
  document.getElementById("setorTitulo").innerText = `Setor: ${setor}`;
  document.getElementById("pendenciaTabela").innerHTML = "";
}

document.getElementById("pendenciaForm").onsubmit = function (e) {
  e.preventDefault();

  const banco = document.getElementById("banco").value;
  const data = document.getElementById("data").value;
  const fornecedor = document.getElementById("fornecedor").value;
  const valor = document.getElementById("valor").value;
  const transacao = document.getElementById("transacao").value;
  const responsavel = document.getElementById("responsavel").value;
  const obs = document.getElementById("obs").value;
  const status = document.getElementById("status").value;

  if (banco && data && fornecedor && valor && transacao && responsavel && status) {
    const tabela = document.getElementById("pendenciaTabela");
    const row = tabela.insertRow();

    row.innerHTML = `
      <td>${banco}</td>
      <td>${data}</td>
      <td>${fornecedor}</td>
      <td>R$ ${parseFloat(valor).toFixed(2)}</td>
      <td>${transacao}</td>
      <td>${responsavel}</td>
      <td>${obs}</td>
      <td>${status}</td>
      <td>
        <button class="btn btn-warning btn-sm me-2" onclick="editar(this)">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="excluir(this)">Excluir</button>
      </td>
    `;

    document.getElementById("pendenciaForm").reset();
  }
};

function excluir(btn) {
  btn.parentElement.parentElement.remove();
}

function editar(btn) {
  const row = btn.parentElement.parentElement;
  document.getElementById("banco").value = row.cells[0].innerText;
  document.getElementById("data").value = row.cells[1].innerText;
  document.getElementById("fornecedor").value = row.cells[2].innerText;
  document.getElementById("valor").value = row.cells[3].innerText.replace("R$ ", "");
  document.getElementById("transacao").value = row.cells[4].innerText;
  document.getElementById("responsavel").value = row.cells[5].innerText;
  document.getElementById("obs").value = row.cells[6].innerText;
  document.getElementById("status").value = row.cells[7].innerText;

  row.remove();
}

function voltarEspera() {
  localStorage.removeItem("departamentoSelecionado"); // Remove o setor selecionado
  window.location.href = "waitingroom.html"; // Redireciona para a tela de espera
}
