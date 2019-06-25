import Alert from './Alert';
import React from 'react';

export const AlertHTMLSource = `<div class="ds-c-alert {{modifier}}">
  <div class="ds-c-alert__body">
    <h3 class="ds-c-alert__heading">Status heading</h3>
    <p class="ds-c-alert__text">Lorem ipsum dolor sit <a href="javascript:void(0);">link text</a>, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>`;
export const AlertReactExample = (
  <Alert heading="A react component">
    This is an example of a React Alert component.
  </Alert>
);
export const AlertReactSource = `
  <Alert heading="A react component">
    This is an example of a React Alert component.
  </Alert>
`;
