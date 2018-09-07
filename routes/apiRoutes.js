var db = require("../models");
var getScore = require('../public/js/calcScore').getScore;

// console.log('teeeeeesting ' + getScore('filler'));

module.exports = (app) => {

  // SURVEY ROUTES

  // calc score
  app.post("/api/calcScore", (req, res) => {
    let data = JSON.parse(req.body.answers);
    let result = getScore(data);
    res.json(result);
  })

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
  });

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
  


  // USER ROUTES



  // get all users
  app.get("/api/user", (req, res) => {
    db.user.findAll({}).then(data => {
      res.json(data);
    });
  });

  // create a user
  app.post("/api/user/newuser", (req, res) => {
    db.user.create(req.body).then(data => {
      res.json(data);
    });
  });

  // get a specific user
  app.get("/api/user/:userid", (req, res) => {
    db.user.findOne({where: { id: req.params.userid }}).then(data => {
      res.json(data);
    });
  });

  // get all user groups
  app.get("/api/user/:userid/group", (req, res) => {
    db.user.findAll({where: { id: req.params.userid },
                    include: [{model: db.group_user,
                              include: [{model: db.group}]
                            }]
                    }).then(data => {
      res.json(data);
    });
  });

  // get a specific group for a specific user
  app.get("/api/user/:userid/group/:groupid", (req, res) => {
    db.user.findAll({where: { id: req.params.userid },
                    include: [{model: db.group_user,
                              include: [{model: db.group,
                                         where: {id: req.params.groupid }
                                        }]
                            }]
                    }).then(data => {
      res.json(data);
    });
  });

  // get all answers for a specific group for a specific user
  app.get("/api/user/:userid/group/:groupid/answer", (req, res) => {
    db.user.findAll({where: { id: req.params.userid },
                    include: [{model: db.group_user,
                              include: [{model: db.group,
                                         where: {id: req.params.groupid }
                                        }, {model: db.group_user_answer,
                                            include: [{ model: db.survey_question,
                                                        include: [{ model: db.survey_axis }]
                                                      }]
                                        }]
                            }]
                    }).then(data => {
      res.json(data);
    });
  });

  // GROUP ROUTES 

  // get group by id
  app.get("/api/group/:groupid", (req, res) => {
    db.group.findOne({ where: { id: req.params.groupid } }).then(data => {
      res.json(data);
    });
  });
  
  // Create a new group
  app.post("/api/group", (req, res) => {
    db.group.create(req.body).then(data => {
      res.json(data);
    });
  });

  // get all users of a specific group id
  app.get("/api/group/:groupid/user", (req, res) => {
    db.group.findAll({
      where: { id: req.params.groupid },
      include: [{ model: db.group_user,
                  include: [{ model: db.user }]
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
          where: { id: req.params.groupid },
          include: [{ model: db.user }]
      }]
    }).then(data => {
      res.json(data);
    });
  });

  app.get("/api/groupuser/user/:userid/group/:groupid", (req, res) => {
    db.group_user.findOne(
      { where: { userid: req.params.userid,
                 groupid: req.params.groupid 
                }
      }).then(data => {
        res.json(data);
      });
  });

  app.get("/api/groupuser/:groupuserid", (req, res) => {
    db.group_user.findOne(
      { where: { id: req.params.groupuserid }
      }).then(data => {
        res.json(data);
      });
  });

  
  // post answers
  app.post("/api/groupuser/:groupuserid/question", (req, res) => {
    let data = JSON.parse(req.body.postData);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
      db.group_user_answer.upsert(data[i]);
    }
    res.sendStatus(200);
  });

  app.get("/api/group/:groupid/answers", (req, res) => {
    db.user.findAll({
      include: [{
        model: db.group_user,
        where: { groupid: req.params.groupid },
        include: [{
          model: db.group_user_answer,
          include: [{
            model: db.survey_question,
            include: [{
              model: db.survey_axis
            }]
          }]
        }, { model: db.group }] 
      }]  
    }).then(data => {
      res.json(data);
    })
  })
 
};
