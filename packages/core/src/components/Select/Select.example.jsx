import React from 'react';
import ReactDOM from 'react-dom';
import Select from './Select';

ReactDOM.render(
  <div>
    <label className="ds-c-label" htmlFor="options">
      Default select
    </label>
    <Select defaultValue="2" name="select-demo">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
      <option value="5">Option 5</option>
      <option value="6">Option 6</option>
      <option value="7">Option 7</option>
    </Select>
    <label className="ds-c-label" htmlFor="options">
      Small select
    </label>
    <Select defaultValue="Jr." size="small" name="small-select-demo">
      <option value="Jr.">Jr.</option>
      <option value="Sr.">Sr.</option>
    </Select>
    <label className="ds-c-label" htmlFor="options">
      Medium select
    </label>
    <Select defaultValue="2" size="medium" name="medium-select-demo">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
      <option value="5">Option 5</option>
      <option value="6">Option 6</option>
      <option value="7">Option 7</option>
    </Select>
  </div>,
  document.getElementById('js-example')
);
