import ReactDom from 'react-dom';
import React from 'react';
import App from './App.jsx';
import _ from 'lodash';

window.addEventListener('DOMContentLoaded', function() {
  var dataset = [
      { name: '三浦あずさ', age: 21, height: 168, bust: 91, waist: 59, hip: 86, color: '#7e479a' },
      { name: '四条貴音', age: 18, height: 169, bust: 90, waist: 62, hip: 92, color: '#a61c69' },
      { name: '星井美希', age: 15, height: 161, bust: 86, waist: 55, hip: 83, color: '#a9d053' },
      { name: '秋月律子', age: 19, height: 156, bust: 85, waist: 57, hip: 85, color: '#01ac5e' },
      { name: '天海春香', age: 17, height: 158, bust: 83, waist: 56, hip: 82, color: '#e33830' },
      { name: '我那覇響', age: 16, height: 152, bust: 83, waist: 56, hip: 80, color: '#00aeb9' },
      { name: '萩原雪歩', age: 17, height: 155, bust: 81, waist: 56, hip: 81, color: '#d3e5e5' },
      { name: '双海亜美/真美', age: 13, height: 158, bust: 78, waist: 55, hip: 77, color: '#ffe43f' },
      { name: '水瀬伊織', age: 15, height: 153, bust: 77, waist: 54, hip: 79, color: '#f39fc1' },
      { name: '菊地真', age: 17, height: 159, bust: 75, waist: 57, hip: 78, color: '#515659' },
      { name: '高槻やよい', age: 14, height: 145, bust: 74, waist: 54, hip: 78, color: '#f3983b' },
      { name: '如月千早', age: 16, height: 162, bust: 72, waist: 55, hip: 78, color: '#0075c2' }
  ];
  ReactDom.render(
    <App data={ _.sortBy(dataset, (d)=> d.height) }/>,
    document.getElementById('container')
  );
});
