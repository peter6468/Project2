var db = require("../models");

module.exports = (app) => {
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
