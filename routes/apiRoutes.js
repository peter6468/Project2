var db = require("../models");

module.exports = (app) => {
  app.get("/api/survey", (req, res) => {
    db.survey.findAll({}).then(data => {
      res.json(data);
    });
  });

  app.get("/api/survey/:surveyid", (req, res) => {
    db.survey.findOne({ where: { id: req.params.surveyid } }).then(data => {
      res.json(data);
    });
  });

  app.get("/api/survey/:surveyid/axis", (req, res) => {
    db.survey_axis.findAll({ where: { surveyid: req.params.surveyid } }).then(data => {
      res.json(data);
    });
  });

  

  // "/api/survey/:surveyid/axis"
  // "/api/survey/:surveyid/axis/:axisid"
  // "/api/survey/:surveyid/axis/:axisid/question"
  // "/api/survey/:surveyid/axis/:axisid/question/:questionid"
  // "/api/survey/:surveyid/question"
  // "/api/survey/:surveyid/question/:questionid"


  // Get all groups
  app.get("/api/group", (req, res) => {
    db.user_group.findAll({}).then(data => {
      res.json(data);
    });
  });

  // Create a new group
  app.post("/api/group", (req, res) => {
    db.user_group.create(req.body).then(data => {
      res.json(data);
    });
  });

  // get group by id
  app.get("/api/group/:groupid", (req, res) => {
    db.user_group.findOne({ where: { id: req.params.groupid } }).then(data => {
      res.json(data);
    });
  });

  app.get("/api/group/:groupid/user", (req, res) => {
    db.user_group.findById(req.params.groupid, {
      include: [{
        model: User
      }]
    }).then(data => {
      res.json(data);
    });
  });
};
