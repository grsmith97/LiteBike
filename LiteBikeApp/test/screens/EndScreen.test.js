import React from 'react';
import renderer, {act} from 'react-test-renderer';
import EndScreen from '../../src/screens/EndScreen';

let button, component, text;
const gameStateMessage = 'You Lost!!!';


describe('Given EndScreen component', () => {
  describe('When the component renders with a message', () => {
    const props = {
      navigation: {
        navigate: jest.fn()
      },
      route: {
        params: {
          gameStateMessage
        }
      }
    };

    beforeEach(() => {
      component = renderer.create(<EndScreen {...props}/>);
      button = component.root.findByProps({'data-testing': 'end-button'});
      text = component.root.findByProps({'data-testing': 'game-state-message'});
    });

    it('Then the component matches the snapshot', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });

    it(`Then ${gameStateMessage} appears on the screen`, () => {
      expect(text.props.children).toBe(gameStateMessage);
    });

    it('Then the try again button is blue', () => {
      expect(button.props.color).toBe('#add8e6');
    });

    describe('When the try again button is clicked', () => {
      beforeEach(() => {
        act(() => {
          button.props.onPress();
        });
      });

      it('Then navigate back to the start screen', () => {
        expect(props.navigation.navigate).toHaveBeenCalled();
      });
    });
  });
});
