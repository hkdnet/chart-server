import ReactDom from 'react-dom';
import React from 'react';
import App from './App.jsx';

window.addEventListener('DOMContentLoaded', function() {
  ReactDom.render(
    <App />,
    document.getElementById('container')
  );
});
