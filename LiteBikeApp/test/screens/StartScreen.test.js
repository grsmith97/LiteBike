import React from 'react';
import renderer, {act} from 'react-test-renderer';
import StartScreen from '../../src/screens/StartScreen';

let component;

describe('Given StartScreen component', () => {
  describe('When the component renders', () => {
    beforeEach(() => {
      component = renderer.create(<StartScreen />);
    });

    it('Then the component matches the snapshot', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('Then LiteBike appears on the screen', () => {
      const text = component.root.findByProps({'data-testing': 'litebike-title'});
      expect(text.props.children).toBe('LiteBike');
    });

    it('Then the start button is blue', () => {
      const button = component.root.findByProps({'data-testing': 'start-button'});
      expect(button.props.color).toBe('#1344ad');
    });

    describe('When the start button is clicked', () => {
      let button;
      beforeEach(() => {
        button = component.root.findByProps({'data-testing': 'start-button'});
        act(() => {
          button.props.onPress();
        });
      });

      it('Then the start buttons color changes', () => {
        expect(button.props.color).toBe('#ff0000');
      });
    });
  });
});
