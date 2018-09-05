var db = require("../models");

module.exports = function(app) {
   //new routes made by Peter 8/30
  // Basic route that sends the user first to the AJAX Page
  app.get("/", function(req, res) {
    res.render("landing");
  });

  app.route("/login")
    .get((req, res) => {
      res.render("login");
    })
    .post((req, res) => {
      req.session.user = req.body;
      console.log("made it here");
      console.log(req.session.user);
      res.redirect('/dashboard');
    });

  app.get("/dashboard", checkSignIn, (req, res) => {
    res.render("userdashboard", { user: req.session.user });
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

  function checkSignIn(req, res, next){
    if(req.session.user){
       next();     //If session exists, proceed to page
    } else {
       var err = new Error("Not logged in!");
       console.log(req.session.user);
       next(err);  //Error, trying to access unauthorized page!
    }
 }
};
