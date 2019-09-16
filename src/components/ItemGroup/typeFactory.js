import * as React from 'react';
import Signal from '../Signal/Signal';
import LabelList from '../LabelList/LabelList';
import Metric from '../Metric/Metric';

export default item => {
  switch (item.type) {
    case 'boolean':
      return <Signal title={item.title} positive={item.data.value} />;
    case 'labelList':
      return <LabelList labels={item.data} />;
    case 'metric':
      return (
        <Metric
          title={item.title}
          value={item.data.value}
          diff={item.data.diff}
          positivePositive={item.data.positivePositive}
        />
      );
    default:
      return null;
  }
};
