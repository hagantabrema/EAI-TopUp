module.exports = (app) => {
  const topup = require("../controller/topup.controller.js");
  var router = require("express").Router();
  router.post("/", topup.create);
  router.get("/", topup.findAll);
  router.get("/:id_topup", topup.findOne);
  app.use("/api/topup", router);
};