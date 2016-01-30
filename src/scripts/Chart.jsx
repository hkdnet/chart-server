import React from 'react';
import { ScatterChart } from 'react-d3';
import _ from 'lodash';

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var scatterData = [{
      name: 'im@s girls',
      values: this.props.data
    }];
    let xName = 'age';
    let yName = 'height';
    return(
      <div className='chart'>
        <ScatterChart
          data={scatterData}
          width={500}
          height={400}
          title="Scatter Chart"
          showTooltip={true}
          xAxisLabel={xName}
          yAxisLabel={yName}
          xAccessor={d => d[xName] || d.x }
          yAccessor={d => d[yName] || d.y }
        />
      </div>
    );
  }
}
