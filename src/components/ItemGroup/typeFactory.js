import * as React from 'react';
import Signal from '../Signal/Signal';

export default item => {
  switch (item.type) {
    case 'boolean':
      return <Signal title={item.title} positive={item.data.value} />;
    default:
      return null;
  }
};
