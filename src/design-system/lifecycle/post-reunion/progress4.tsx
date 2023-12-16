import React from 'react';

import { ProgressTracker, Stages } from '@atlaskit/progress-tracker';

const items: Stages = [
    {
        id: 'creacion-1',
        label: 'Creación',
        percentageComplete: 100,
        status: 'visited',
        href: '/creacion',
      },
  {
    id: 'pre-reunion-2',
    label: 'Pre-Reunión',
    percentageComplete: 100,
    status: 'visited',
    href: '/prereunion',
  },
  {
    id: 'en-reunion-3',
    label: 'En Reunión',
    percentageComplete: 100,
    status: 'visited',
    href: '/enreunion',
  },
  {
    id: 'post-reunion-4',
    label: 'Post-Reunión',
    percentageComplete: 0,
    status: 'current',
    href: '#',
  }
];

export default () => <ProgressTracker items={items} />;