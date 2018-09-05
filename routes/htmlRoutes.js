var db = require("../models");

module.exports = function(app) {
   //new routes made by Peter 8/30
  // Basic route that sends the user first to the AJAX Page
  app.get("/", function(req, res) {
    res.render("landing");
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.get("/:userid/dashboard", function(req, res) {
    if (req.params.userid) {
      res.render("userdashboard");
    } 
  });

  app.get("/:userid/creategroup", function(req, res) {
    if (req.params.userid) {
      res.render("creategroup");
    }
  });

  app.get("/:userid/:groupid/groupsurvey", function(req, res) {
    if (req.params.userid && req.params.groupid) {
      res.render("survey");
    }
  });

  app.get("/:userid/:groupid/groupresults", function(req, res) {
    if (req.params.userid && req.params.groupid) {
      res.render("groupresults");
    }
  });

  app.get("/:userid/:groupid/userresults", function(req, res) {
    if (req.params.userid && req.params.groupid) {
      res.render("userresults");
    }
  });
};
