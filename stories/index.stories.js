import { Button, Welcome } from '@storybook/react/demo';
import { addDecorator, storiesOf } from '@storybook/react';
import Alert from '../packages/core/src/components/Alert/Alert';
import React from 'react';
import { action } from '@storybook/addon-actions';
import alertmarkdownNotes from '../packages/core/src/components/Alert/someMarkdownText.md';
import { linkTo } from '@storybook/addon-links';
import { withA11y } from '@storybook/addon-a11y';

// should only be added once
// best place is in config.js
addDecorator(withA11y);

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Components/Alert', module).add(
  'Default Alert',
  () => (
    <Alert heading="A react component">
      This is an example of a React Alert component.
    </Alert>
  ),
  {
    notes: { markdown: alertmarkdownNotes }
  }
);

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀
      </span>
    </Button>
  ));
