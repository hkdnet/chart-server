import React from 'react';
import Chart from './Chart.jsx'
import Console from './Console.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='app'>
        <Chart />
        <Console />
      </div>
    );
  }
}
