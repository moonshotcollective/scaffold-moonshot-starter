import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as QButton } from '../stories/QButton.stories';

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<QButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
