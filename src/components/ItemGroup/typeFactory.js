import * as React from 'react';
import Signal from '../Signal/Signal';
import LabelList from '../LabelList/LabelList';

export default item => {
  switch (item.type) {
    case 'boolean':
      return <Signal title={item.title} positive={item.data.value} />;
    case 'labelList':
      return <LabelList labels={item.data} />;
    default:
      return null;
  }
};
