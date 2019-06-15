const express = require("express");
const router = express.Router();
const request = require("request");

// For PHP
router.get("/a", function(req, res) {
  res.render("a");
});
router.post("/a", function(req, res) {
  let code = req.body.script;
  var program = {
    script: code,
    language: "php",
    versionIndex: "0",
    clientId: "95fe9387312837fea53f8b9e3c92c107",
    clientSecret:
      "44636726fe688635b2b7ed86a112bc63c70c718e7f0d0717f2f9f0ff4abb1e04"
  };
  request(
    {
      url: "https://api.jdoodle.com/execute",
      method: "POST",
      json: program
    },
    function(error, response, body) {
      console.log("error:", error);
      console.log("statusCode:", response && response.statusCode);
      console.log("body:", body);
      res.json({ result: body.output });
    }
  );
});

//For python
router.get("/p", function(req, res) {
  res.render("p");
});
router.post("/p", function(req, res) {
  let code = req.body.script;

  var program = {
    script: code,
    language: "python3",
    versionIndex: "2",
    clientId: "95fe9387312837fea53f8b9e3c92c107",
    clientSecret:
      "44636726fe688635b2b7ed86a112bc63c70c718e7f0d0717f2f9f0ff4abb1e04"
  };
  request(
    {
      url: "https://api.jdoodle.com/execute",
      method: "POST",
      json: program
    },
    function(error, response, body) {
      console.log("error:", error);
      console.log("statusCode:", response && response.statusCode);
      console.log("body:", body);
      res.json({ result: body.output });
    }
  );
});

module.exports = router;
