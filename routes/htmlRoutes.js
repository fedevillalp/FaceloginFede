var db = require("../models");

// module.exports = router;
module.exports = function(app) {
  
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/login", function (req, res) {
    res.render("login");
  })
  app.get ('/dashboard', function(req, res){
      res.render('dashboard')
  })

  app.get("*", function(req, res) {
    res.render("404");
  });
};
