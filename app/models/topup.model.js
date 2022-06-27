const sql = require("./db.js");

const TopUp = function (topup) {
  this.id_topup = topup.id_topup;
  this.id_customer = topup.id_customer;
  this.nominal = topup.nominal;
  this.jumlah_saldo = topup.jumlah_saldo;
};

// New TopUp
// tested
TopUp.create = (newTopUp, result) => {
  sql.query("INSERT INTO topup SET ?", newTopUp, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("TopUp berhasil: ", { ...newTopUp });
    result(null, { ...newTopUp });
  });
};

// View TopUp by id
// tested
TopUp.findById = (id_topup, result) => {
  sql.query(`SELECT * FROM topup WHERE id_topup LIKE '%${id_topup}%'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found topup: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found TopUp with the id
    result({ kind: "not_found" }, null);
  });
};

// View All TopUp
// tested
TopUp.getAll = (id_topup, result) => {
  let query = "SELECT * FROM topup";
  if (id_topup) {
    query += ` WHERE id_topup LIKE '%${id_topup}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("topup: ", res);
    result(null, res);
  });
};
module.exports = TopUp;