export default {
  title: 'UNGC SB POC',
};


import { storiesOf } from '@storybook/html';

import '../scss/index.scss'

storiesOf('Button', module)
  .add('Primary', () => '<div class="button"><p>+ Create a new COP</p></div>')
  .add('Ghost', () => '<div class="button--ghost"><p>Export data</p></div>');

storiesOf('Header', module)
  .add('Primary', () => '<header class="header"><p>Header Primary</p></header>')
  .addParameters({})
  .add('Secondary', () => '<header class="header--secondary"><p>Header Secondary</p></header>');

