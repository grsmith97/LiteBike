import React from 'react';
import renderer, {act} from 'react-test-renderer';
import MapScreen from '../../src/screens/MapScreen';

import mapImage from '../../src/assets/map-devmap.png';
import playerImage from '../../src/assets/entity-player.png';
import enemyImage from '../../src/assets/entity-enemy.png';

let button, component, devMap, enemy, player, text;
const buttonColor = '#32c8fa';

describe('Given MapScreen component', () => {
  describe('When the component renders', () => {
    const props = {
      navigation: {
        navigate: jest.fn()
      }
    };

    beforeEach(() => {
      component = renderer.create(<MapScreen {...props}/>);
      button = component.root.findByProps({'data-testing': 'next-button'});
      text = component.root.findByProps({'data-testing': 'title'});
      devMap = component.root.findByProps({'data-testing': 'dev-map'});
      player = component.root.findByProps({'data-testing': 'player'});
      enemy = component.root.findByProps({'data-testing': 'enemy'});
    });

    it('Then the component matches the snapshot', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('Then a Level name appears on the screen', () => {
      expect(text.props.children).toBe('Level: DevMap');
    });

    it('Then the map exists', () => {
      expect(devMap.props.source).toBe(mapImage);
    });

    it('Then the player exists', () => {
      expect(player.props.source).toBe(playerImage);
    });

    it('Then the enemy exists', () => {
      expect(enemy.props.source).toBe(enemyImage);
    });


    it(`Then the button has color: ${buttonColor}`, () => {
      expect(button.props.color).toBe(buttonColor);
    });

    describe('When the next button is clicked', () => {
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
