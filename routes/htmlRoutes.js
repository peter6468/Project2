var db = require("../models");

module.exports = function(app) {
 
  app.get("/", function(req, res) {
    res.render("landing");
  });

  app.route("/login")
    .get((req, res) => {
      res.render("login");
    })
    .post((req, res) => {
      req.session.user = req.body;
      res.redirect('/dashboard');
    });

  app.get("/dashboard", checkSignIn, (req, res) => {
      res.render("userdashboard", { user: req.session.user });
  });

  app.post("/dashboard", checkSignIn, (req, res) => {
      req.session.groupuser = req.body.groupuser;
      let action = req.body.action;
      console.log(req.session.groupuser);
      console.log(action);
      if (action === "groupsurvey") {
        res.redirect('/groupsurvey');
      } else if (action === "groupresults") {
        res.redirect('/groupresults');
      } else {
        console.log('wtf');
      }
  });

  app.get("/creategroup", checkSignIn, (req, res) => {
      res.render("creategroup", { user: req.session.user });
  });

  app.get("/groupresults", checkSignIn, (req, res) => {
      res.render("groupresults", { groupuser: req.session.groupuser });
  });

  app.get("/groupsurvey", checkSignIn, (req, res) => {
      res.render("groupsurvey", { groupuser: req.session.groupuser });
  });

  app.get("/about", checkSignIn, (req, res) => {
      res.render("about");
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
       res.redirect('/login');
    }
 }
};
