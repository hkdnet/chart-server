import React from 'react';

export default class Console extends React.Component {
  constructor(props) {
    super(props);
    this.chartTypes = [
      'Scatter',
      'Bar(NotImplemented)',
    ];
  }
  onClickHandler() {
    console.log(this.refs.chartType.value)
  }

  render() {
    var options = this.chartTypes.map((e, i)=> {
      return (
        <option key={i} value={e}>
          {e}
        </option>
      )
    });
    return(
      <div className='console'>
        <select ref="chartType" defaultValue={this.props.chartType}>
          { options }
        </select>
        <button onClick={this.onClickHandler.bind(this)}>
          反映
        </button>
      </div>
    );
  }
}
