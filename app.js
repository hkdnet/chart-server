'use strict';

const express = require('express');
const jade = require('jade')
let app = express();
let port = 3000;

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  var dataset = [
    { name: '三浦あずさ', age: 21, height: 168, bust: 91, waist: 59, hip: 86 },
    { name: '四条貴音', age: 18, height: 169, bust: 90, waist: 62, hip: 92 },
    { name: '星井美希', age: 15, height: 161, bust: 86, waist: 55, hip: 83 },
    { name: '秋月律子', age: 19, height: 156, bust: 85, waist: 57, hip: 85 },
    { name: '天海春香', age: 17, height: 158, bust: 83, waist: 56, hip: 82 },
    { name: '我那覇響', age: 16, height: 152, bust: 83, waist: 56, hip: 80 },
    { name: '萩原雪歩', age: 17, height: 155, bust: 81, waist: 56, hip: 81 },
    { name: '双海亜美', age: 13, height: 158, bust: 78, waist: 55, hip: 77 },
    { name: '双海真美', age: 13, height: 158, bust: 78, waist: 55, hip: 77 },
    { name: '水瀬伊織', age: 15, height: 153, bust: 77, waist: 54, hip: 79 },
    { name: '菊地真', age: 17, height: 159, bust: 75, waist: 57, hip: 78 },
    { name: '高槻やよい', age: 14, height: 145, bust: 74, waist: 54, hip: 78 },
    { name: '如月千早', age: 16, height: 162, bust: 72, waist: 55, hip: 78 }
  ];
  res.render('index', {data: dataset});
});

app.listen(port, function() {
  console.log('SERVER START...')
});
