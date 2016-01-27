import React from 'react';

export default class ScatterChartSettings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='scatterChartSettings'>
        <label for="x">x</label>
        <input name="x" defaultValue={this.props.x} />
        <label for="y">y</label>
        <input name="y" defaultValue={this.props.y} />
      </div>
    );
  }
}
