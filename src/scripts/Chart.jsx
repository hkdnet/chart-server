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
      values: _.map(this.props.data, (d) => {
        return {
          x: d.height,
          y: d.bust
        }
      })
    }];
    return(
      <div className='chart'>
        <ScatterChart
          data={scatterData}
          width={500}
          height={400}
          title="Scatter Chart"
        />
      </div>
    );
  }
}
