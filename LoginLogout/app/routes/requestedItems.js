var requestedItemsController = require("../controllers/requestedItemsController.js");

module.exports = function(app, passport) {
  app.get(
    "/requestedItem",
    isLoggedIn,
    requestedItemsController.viewrequestedItem
  );
  app.get(
    "/addrequestedItem",
    isLoggedIn,
    requestedItemsController.addrequestItempage
  );
  app.post("/addrequestedItem", requestedItemsController.addrequestItem);

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect("/signin");
  }
};
