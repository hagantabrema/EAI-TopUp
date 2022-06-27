const TopUp = require("../models/topup.model.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Tidak ada data TopUp!",
    });
  }
  // Create a TopUp
  const topup = new TopUp({
    id_topup: req.body.id_topup,
    id_customer: req.body.id_customer,
    nominal: req.body.nominal,
    jumlah_saldo: req.body.jumlah_saldo
  });
  // Save TopUp in the database
  TopUp.create(topup, (err, data) => {
    if (err)
    res.status(500).send({
      message:
      err.message || "Some error occurred while creating the TopUp.",
    });
    else res.send(data);
  });
};

// Get one TopUp by id
exports.findOne = (req, res) => {
  TopUp.findById(req.params.id_topup, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found TopUp with id ${req.params.id_topup}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving TopUp with id " + req.params.id_topup,
        });
      }
    } else res.send(data);
  });
};

// Get All TopUp
exports.findAll = (req, res) => {
  const id_topup = req.query.id_topup;
  TopUp.getAll(id_topup, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving TopUps.",
      });
    else res.send(data);
  });
};