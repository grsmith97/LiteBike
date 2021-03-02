import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

let component;

describe('Given App component', () => {
  describe('When the component renders', () => {
    beforeEach(() => {
      component = renderer.create(<App />);
    });

    it('Then the component matches the snapshot', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('Then Hello World appears on the screen', () => {
      const text = component.root.findByProps({'data-testing': 'hello-world'});
      expect(text.props.children).toBe('Hello, world!');
    });
  });
});
