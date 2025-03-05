const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // Seu usuário do MySQL
  password: "wowoxuc6", // Sua senha do MySQL
  database: "controle_pendencias",
});

connection.connect((err) => {
  if (err) {
    console.error("Erro na conexão:", err);
    return;
  }
  console.log("Banco de Dados Conectado!");
});

module.exports = connection;
