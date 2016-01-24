'use strict';
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
window.addEventListener('DOMContentLoaded', function() {
(function($, $$, undefined) {
  var chartSize = {
    width: 620,
    height: 620
  };
  var xName = "height";
  var yName = "age";
  var axisPadding = 20;
  var padding = 10;
  var linearScaleFactory = function(options) {
    // REQUIRED
    var name = options['name'];
    var padding = options['padding'];
    // OPTIONAL
    var min = options['min'] === undefined ? _.minBy(dataset, function(d) { return d[name]; })[name] : options['min'];
    var max = options['max'] === undefined ? _.maxBy(dataset, function(d) { return d[name]; })[name] : options['max'];

    var scale = d3.scale.linear()
                  .domain(options['reverse'] ? [max, min] : [min, max])
                  .range([padding + axisPadding,
                          chartSize.width - padding - axisPadding]);
    return scale;

  }
  var xOption = {name: xName, padding: padding, min: 130, max: 170};
  var yOption = {name: yName, padding: padding, min: 12, max: 25, reverse: true}
  var xScale = linearScaleFactory(xOption);
  var yScale = linearScaleFactory(yOption);
  var svg = d3.select('#chart').append('svg').attr(chartSize);
  var xAxis = d3.svg.axis().scale(xScale).orient("bottom");;
  var yAxis = d3.svg.axis().scale(yScale).orient("left");;
  svg.selectAll('circle').data(dataset).enter().append('circle').attr({
    cx: function(d) { return xScale(d[xName]); },
    cy: function(d) { return yScale(d[yName]); },
    r: function(d) { return Math.sqrt(d.bust - 70) * 2; }
  });
  svg.append("g").attr({
    "class": "x axis",
    transform: "translate(0," + (chartSize.height - padding - axisPadding) + ")"
  }).call(xAxis);
  svg.append("g").attr({
      "class": "y axis",
      transform: "translate(" + (padding + axisPadding) +  ", 0)"
  }).call(yAxis);
})(document.querySelector.bind(document), document.querySelectorAll.bind(document));
});
