var exports = (module.exports = {});
var Request = require("../models");

exports.viewrequestedItem = function(req, res) {
  res.render("requests/requestedItems");
};

exports.addrequestItempage = function(req, res) {
  res.render("requests/requestedItems");
};

exports.addrequestItem = function(req, res) {
  console.log(req.body);
  // res.json(req);
  // res.json({
  //     "bearingCost": req.body.bearingCost,
  //     "requestType": req.body.requestType,
  //     "objective": req.body.objective
  // });
  // res.json({ "OK": "OK" });

  Request.requests
    .create({
      item: "vibrator",
      quantity: 3,
      price: 4.2,
      tax: 9.85,
      purchaseType: "business",
      vendor: "SPENCERS"
    })
    .then(res.json({ OK: "OK created" }))
    .catch(err => console.log(err));
};
