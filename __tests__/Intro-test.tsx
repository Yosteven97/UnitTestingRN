import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../intro';

test('renders correctly', () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <View
      style={
        {
          "alignItems": "center",
          "backgroundColor": "#F5FCFF",
          "flex": 1,
          "justifyContent": "center",
        }
      }
    >
      <Text
        style={
          {
            "fontSize": 20,
            "margin": 10,
            "textAlign": "center",
          }
        }
      >
        Welcome to React Native!
      </Text>
      <Text
        style={
          {
            "color": "#333333",
            "marginBottom": 5,
            "textAlign": "center",
          }
        }
      >
        This is a React Native snapshot test.
      </Text>
    </View>
  `);
});
