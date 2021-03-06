var express = require('express');
var router = express.Router({caseSensitive: true, strict: true});
var fs = require("fs");
//router.caseSensitive;

var file = './data.json';

let list=null;

fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }

  list = data;// JSON.parse(data);
});

/* GET investors listing. */
router.get('/', function(req, res, next) {
  res.render('investors', { title: 'Investors', data: list });
});

module.exports = router;