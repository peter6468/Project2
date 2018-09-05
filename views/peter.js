var userData = {
    name: $("#name").val(),
    email: $("#email").val(),
    scores: [
      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val(),
      $("#q6").val(),
      $("#q7").val(),
      $("#q8").val(),
      $("#q9").val(),
      $("#q10").val(),
      $("#q11").val(),
      $("#q12").val(),
      $("#q13").val(),
      $("#q14").val(),
      $("#q15").val(),
      $("#q16").val(),
      $("#q17").val(),
      $("#q18").val(),
      $("#q19").val(),
      $("#q20").val(),
      $("#q21").val(),
      $("#q22").val(),
      $("#q23").val(),
      $("#q24").val(),
      $("#q25").val(),
      $("#q26").val(),
      $("#q27").val(),
      $("#q28").val(),
      $("#q29").val(),
      $("#q30").val(),
      $("#q31").val(),
      $("#q32").val(),
    ]
  };

  var orm = require('../config/orm.js');

  var USERDATA = {
      all: function(cb) {
          //inserting burgers as our table input, running function of res a cb
          //wh/wil be sent into our burgers_controller.js
          orm.all('userdata', function(res) {
              cb(res);
          })
      },
 
      update: function(id,cb) {
          orm.update('userdata', id, cb)
      },
 
      create: function(name, price, cb) {
          orm.create('userdata', name, email, q1, value, cb);
      }
  }
 
  module.exports = USERDATA;