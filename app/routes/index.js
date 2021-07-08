const express = require('express');
const router = express.Router();
const shell = require("shelljs");
const path = "./";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.post('/', function(req, res, next) {
  // go to the path and clone the project
  shell.cd(path);
  shell.exec("git clone " + req.body.path);

});
module.exports = router;
