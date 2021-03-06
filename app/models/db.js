const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Koneksi ke database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Berhasil terkoneksi ke database.");
});
module.exports = connection;