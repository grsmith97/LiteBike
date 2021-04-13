import React from 'react';
import renderer, {act} from 'react-test-renderer';
import StartScreen from '../../src/screens/StartScreen';

let button, component, text;

describe('Given StartScreen component', () => {
  describe('When the component renders with a message', () => {
    const props = {
      navigation: {
        navigate: jest.fn()
      }
    };

    beforeEach(() => {
      component = renderer.create(<StartScreen {...props}/>);
      button = component.root.findByProps({'data-testing': 'start-button'});
      text = component.root.findByProps({'data-testing': 'litebike-title'});
    });

    it('Then the component matches the snapshot', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('Then LiteBike appears on the screen', () => {
      expect(text.props.children).toBe('LiteBike');
    });

    it('Then the start button is blue', () => {
      expect(button.props.color).toBe('#add8e6');
    });

    describe('When the start button is clicked', () => {
      beforeEach(() => {
        act(() => {
          button.props.onPress();
        });
      });

      it('Then navigate to the end screen', () => {
        expect(props.navigation.navigate).toHaveBeenCalled();
      });
    });
  });
});
