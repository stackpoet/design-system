import { addDecorator, storiesOf } from '@storybook/react';
import Alert from '../packages/core/src/components/Alert/Alert';
import React from 'react';
import { Welcome } from '@storybook/react/demo';
import alertmarkdownNotes from '../packages/core/src/components/Alert/someMarkdownText.md';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

// should only be added once
// best place is in config.js
addDecorator(withA11y);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome />, {
  info: {
    disable: true
  }
});

storiesOf('Components/Alert', module).add(
  'Default Alert',
  () => (
    <Alert heading="A react component">
      This is an example of a React Alert component.
    </Alert>
  ),
  {
    notes: { markdown: alertmarkdownNotes },
    info: {
      inline: true,
      header: false,
      text: `
        # Titledescription

        or documentation about my component, supports markdown
        `
    }
  }
);
