var db = require("../models");

module.exports = (app) => {

  // all surveys
  app.get("/api/survey", (req, res) => {
    db.survey.findAll({}).then(data => {
      res.json(data);
    });
  });

  // specific survey by id
  app.get("/api/survey/:surveyid", (req, res) => {
    db.survey.findOne({ where: { id: req.params.surveyid } }).then(data => {
      res.json(data);
    });
  });

  // all axes for specific survey by id
  app.get("/api/survey/:surveyid/axis", (req, res) => {
    db.survey_axis.findAll({ where: { surveyid: req.params.surveyid }, include: [db.survey]}).then(data => {
      res.json(data);
    });
  });

  // specific axis for specific survey by ids
  app.get("/api/survey/:surveyid/axis/:axisid", (req, res) => {
    db.survey_axis.findOne({ where: { surveyid: req.params.surveyid,
                                      id: req.params.axisid 
                                    }, include: [db.survey] }).then(data => {
      res.json(data);
    });
  });

  // all questions for specific axis for specific survey by ids
  app.get("/api/survey/:surveyid/axis/:axisid/question", (req, res) => {
    db.survey_question.findAll(
      { where: { surveyAxisid: req.params.axisid }, 
                 include: [{
                            model: db.survey_axis,
                            where: {surveyid: req.params.surveyid},
                            include: [db.survey]
                          }]
      }).then(data => {
        res.json(data);
        });
  });
  
  // specific question for specific axis for specific survey by ids
  app.get("/api/survey/:surveyid/axis/:axisid/question/:questionid", (req, res) => {
    db.survey_question.findOne(
      { where: { surveyAxisid: req.params.axisid,
                 id: req.params.questionid }, 
                 include: [{
                            model: db.survey_axis,
                            where: {surveyid: req.params.surveyid},
                            include: [db.survey]
                          }]
      }).then(data => {
        res.json(data);
        });
  });

  // all questions for a specific survey by id
  app.get("/api/survey/:surveyid/question", (req, res) => {
    db.survey_question.findAll(
      { include: [{ model: db.survey_axis,
                    where: {surveyid: req.params.surveyid},
                    include: [db.survey]
                 }]
      }).then(data => {
        res.json(data);
        });
  })

  // specific question for a specific survey by ids
  app.get("/api/survey/:surveyid/question/:questionid", (req, res) => {
    db.survey_question.findAll(
      { where: { id: req.params.questionid },
        include: [{ model: db.survey_axis,
                    where: {surveyid: req.params.surveyid},
                    include: [db.survey]
                 }]
      }).then(data => {
        res.json(data);
        });
  })
  
  // get all groups
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

  // get all users of a specific group id
  app.get("/api/group/:groupid/user", (req, res) => {
    db.user.findAll(
      {
        include: [{
          model: db.user_group,
          where: { id: req.params.groupid }
      }]
    }).then(data => {
      res.json(data);
    });
  });

  // get a specific user in a specific group by ids
  app.get("/api/group/:groupid/user/:userid", (req, res) => {
    db.user.findOne(
      { where: { id: req.params.userid },
        include: [{
          model: db.user_group,
          where: { id: req.params.groupid }
      }]
    }).then(data => {
      res.json(data);
    });
  });

  // get a all answers for a specific user in a specific group by ids
  app.get("/api/group/:groupid/user/:userid/answer", (req, res) => {
    db.user_answer.findAll(
      { where: { userid: req.params.userid },
        include: [{ model: db.user,
                    include: [{ model: db.user_group,
                                where: { id: req.params.groupid } 
                    }] 
                  }, { model: db.survey_question,
                       include: [{ model: db.survey_axis, 
                                   include: [{ model: db.survey }] 
                                }] 
                  }]
      }).then(data => {
        res.json(data);
    });
  });
  

  // post new answer
  app.post("/api/group/:groupid/user/:userid/answer/:answerid/:value", (req, res) => {
    let answerVal = req.params.value;
    db.user_answer.findOrCreate({ where: [{userid: req.params.userid }, 
                                { surveyquestionid: req.params.answerid }, 
                                { value: answerVal }]})
      .then(data => {
        res.json(data);
    });
  });

};


//new routes made by Peter 8/30
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "landingpage"));
});

app.get("/login", function(req, res) {
  res.sendFile(path.join(__dirname, "login"));
});

app.get("/:userid/dashboard", function(req, res) {
  res.sendFile(path.join(__dirname, "useriddashboard"));
});

app.get("/:userid/creategroup", function(req, res) {
  res.sendFile(path.join(__dirname, "useridcreategroup"));
});

app.get("/:userid/groupsurvey", function(req, res) {
  res.sendFile(path.join(__dirname, "useridgroupsurvey"));
});




