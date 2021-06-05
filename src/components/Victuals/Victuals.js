import { Fragment } from 'react';

import VictualsSummary from './VictualsSummary';
import AvailableVictuals from './AvailableVictuals';

const Victuals = () => {
  return (
    <Fragment>
      <VictualsSummary />
      <AvailableVictuals />
    </Fragment>
  );
};

export default Victuals;