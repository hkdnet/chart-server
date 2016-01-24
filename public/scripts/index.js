'use strict';

window.addEventListener('DOMContentLoaded', function() {
(function($, $$, undefined) {
  var dataset = JSON.parse($('#datasource').value);
  var chartSize = {
    width: 620,
    height: 620,
    axisPadding: 20,
    chartPadding: 10
  };
  chartSize.totalPadding = chartSize.axisPadding + chartSize.chartPadding;
  var xName = "height";
  var yName = "age";
  var linearScaleFactory = function(options) {
    // REQUIRED
    var name = options['name'];
    // OPTIONAL
    var min = options['min'] === undefined ? _.minBy(dataset, function(d) { return d[name]; })[name] : options['min'];
    var max = options['max'] === undefined ? _.maxBy(dataset, function(d) { return d[name]; })[name] : options['max'];

    var scale = d3.scale.linear()
                  .domain(options['reverse'] ? [max, min] : [min, max])
                  .range([chartSize.totalPadding,
                          chartSize.width - chartSize.totalPadding]);
    return scale;
  }
  var xOption = {name: xName, min: 130, max: 170};
  var yOption = {name: yName, min: 12, max: 25, reverse: true}
  var xScale = linearScaleFactory(xOption);
  var yScale = linearScaleFactory(yOption);
  var svg = d3.select('#chart').append('svg').attr(chartSize);
  var xAxis = d3.svg.axis().scale(xScale).orient("bottom");;
  var yAxis = d3.svg.axis().scale(yScale).orient("left");;
  var g = svg.selectAll('g').data(dataset).enter().append('g').attr({
    transform: function(d) {
      return "translate(" + xScale(d[xName]) + ", " + yScale(d[yName]) + ")";
    }
  });
  g.append('circle').attr({
    r: function(d) { return Math.sqrt(d.bust - 70) * 4; },
    fill: 'black'
  })
  g.append('text').attr({
    'text-anchor': "middle",
    'dy': ".35em",
    'fill': "white"
  }).text(function(d) { return d.name; })
  svg.append("g").attr({
    "class": "x axis",
    transform: "translate(0," + (chartSize.height - chartSize.totalPadding) + ")"
  }).call(xAxis);
  svg.append("g").attr({
      "class": "y axis",
      transform: "translate(" + chartSize.totalPadding +  ", 0)"
  }).call(yAxis);
})(document.querySelector.bind(document), document.querySelectorAll.bind(document));
});
