/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Timeline from './components/Timeline';
import { BABY_DATA, MILESTONES } from './constants';

export default function App() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-paper">
      <Hero info={BABY_DATA} />
      <Timeline milestones={MILESTONES} />
    </div>
  );
}


