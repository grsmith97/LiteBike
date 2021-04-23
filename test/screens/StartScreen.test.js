import React from 'react';
import renderer, {act} from 'react-test-renderer';
import StartScreen from '../../src/screens/StartScreen';
import settingsImage from '../../src/assets/settings-cog.png';

let component, settingsButton, settingsDisabled, startButton, text;

describe('Given StartScreen component', () => {
  describe('When the component renders with a message', () => {
    const props = {
      navigation: {
        navigate: jest.fn()
      }
    };

    beforeEach(() => {
      component = renderer.create(<StartScreen {...props}/>);
      startButton = component.root.findByProps({'data-testing': 'start-button'});
      text = component.root.findByProps({'data-testing': 'litebike-title'});
      settingsButton = component.root.findByProps({'data-testing': 'settings-button'});
      settingsDisabled = component.root.findByProps({'data-testing': 'settings-disabled'});
    });

    it('Then the component matches the snapshot', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('Then LiteBike appears on the screen', () => {
      expect(text.props.children).toBe('LiteBike');
    });

    it('Then the start button is blue', () => {
      expect(startButton.props.color).toBe('#add8e6');
    });

    it('Then the settings button exists', () => {
      expect(settingsButton.props.source).toBe(settingsImage);
    });

    it('Then the settings button is disabled', () => {
      expect(settingsDisabled.props.disabled).toBe(true);
    });

    describe('When the start button is clicked', () => {
      beforeEach(() => {
        act(() => {
          startButton.props.onPress();
        });
      });

      it('Then navigate to the map screen', () => {
        expect(props.navigation.navigate).toHaveBeenCalled();
      });
    });
  });
});
